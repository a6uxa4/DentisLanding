"use client";

import { DatePicker } from "@/components/UI/CustomDateSchedule";
import {
  useGetFreeTimeAppoinmentQuery,
  usePostAppointmentMutation,
} from "@/services/appoinment.service";
import { useForm } from "react-hook-form";
import { useGetPersonalQuery } from "@/services/personal.service";
import { RECORDTYPEDATA } from "@/utils/constants/appointment.constant";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { NextPage } from "next";
import { appointmentsProps } from "@/common/appointments.common";
import { calculateEndTime } from "@/utils/helpers";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export const AppointmentsPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<appointmentsProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      userId: null,
      phoneNumber: "",
      startDate: "",
      startTime: "",
      endTime: "",
      recordType: null,
    },
  });

  const route = useRouter();

  const { data: PersonaData = [] } = useGetPersonalQuery(1);
  const { data: FreeTimeData = [] } = useGetFreeTimeAppoinmentQuery(
    {
      userID: watch("userId"),
      dataOfAppointment: watch("startDate"),
    },
    {
      skip: !watch("userId") || !watch("startDate"),
    }
  );

  const [handlePost] = usePostAppointmentMutation();

  const onSubmit = async (data: appointmentsProps) => {
    try {
      const loadingToast = toast.loading("Загрузка, подождите пожалуйста");
      const response = await handlePost(data).unwrap();
      toast.dismiss(loadingToast);
      toast.success(response.message);
      reset();
      setTimeout(() => {
        route.push("/");
      }, 2000);
    } catch (error) {
      toast.error(
        (error as Error).message ||
          "Ошибка отправки формы. Пожалуйста, попробуйте еще раз."
      );
    }
  };

  return (
    <div className="w-[100vw] bg-[#00d6d4] relative flex justify-center items-start py-10 text-center">
      <div className="w-full flex flex-col items-center justify-between gap-2 max-w-[1440px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-2"
        >
          <Input
            isRequired
            className="max-w-xs"
            type="string"
            label="Имя"
            placeholder="Введите имя"
            {...register("firstName", {
              required: "Обязательное поле !",
            })}
          />
          <Input
            isRequired
            className="max-w-xs"
            type="string"
            label="Фамилия"
            placeholder="Введите фамилию"
            {...register("lastName", {
              required: "Обязательное поле !",
            })}
          />
          <Input
            isRequired
            className="max-w-xs"
            type="string"
            label="Номер телефона"
            defaultValue="+996"
            {...register("phoneNumber", {
              required: "Обязятельное поле",
              min: {
                value: 13,
                message: "Заполните полностью",
              },
              pattern: {
                value: /^(\+\d{1,4})?\d{9,12}$/,
                message: "Не допустимый номер",
              },
            })}
            maxLength={13}
          />
          <Select
            label="Доктор"
            placeholder="Выберите доктора"
            isRequired
            className="max-w-xs"
            {...register("userId", {
              required: "Обязательное поле !",
            })}
          >
            {PersonaData.map((animal: any) => (
              <SelectItem key={animal.id} value={animal.id}>
                {animal.fullName}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Тип лечение"
            placeholder="Выберите лечение"
            isRequired
            className="max-w-xs"
            {...register("recordType", {
              required: "Обязательное поле !",
            })}
          >
            {RECORDTYPEDATA.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
          <DatePicker
            label="Выберите время"
            scheduleData={FreeTimeData}
            onDate={(e) => setValue("startDate", e)}
            onTime={(e) => {
              setValue("startTime", e);
              setValue("endTime", calculateEndTime(watch("startTime"), 30));
            }}
          />
          <Button
            className="max-w-xs bg-[#f4f4f5]"
            radius="sm"
            onClick={handleSubmit(onSubmit)}
          >
            Записаться
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentsPage;
