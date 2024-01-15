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
import { appointmentsProps } from "@/common/appointments.common";
import { calculateEndTime } from "@/utils/helpers";
import toast from "react-hot-toast";
import AppointmentPhoto from "../../assets/images/appointmentPhoto.svg";
import Image from "next/image";
import { useSectionInView } from "@/hooks/useSectionInView";
import { useState } from "react";

export const AppointmentsPage = () => {
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
  const [isData, setIsData] = useState(false);

  const { ref } = useSectionInView("APPOINTMENTS");

  const { data: PersonaData = [] } = useGetPersonalQuery(14);
  const { data: FreeTimeData = [] } = useGetFreeTimeAppoinmentQuery(
    {
      userID: watch("userId"),
      dataOfAppointment: watch("startDate"),
    },
    {
      skip: !watch("userId") || !watch("startDate"),
    }
  );

  const [handlePost, { isLoading }] = usePostAppointmentMutation();

  const onSubmit = async (data: appointmentsProps) => {
    try {
      const loadingToast = toast.loading("Загрузка, подождите пожалуйста");
      const response = await handlePost({
        ...data,
        phoneNumber: data.phoneNumber.slice(1),
      }).unwrap();
      toast.dismiss(loadingToast);
      toast.success(response.message);
      reset();
      setIsData(true);
    } catch (error) {
      toast.error(
        (error as Error).message ||
          "Ошибка отправки формы. Пожалуйста, попробуйте еще раз."
      );
    }
  };

  return (
    <div
      ref={ref}
      id="appointments"
      className="w-[100vw] bg-white relative flex justify-center items-start py-10 bg-gold-400 sm:py-5 scroll-mt-24"
    >
      <div className="w-full flex flex-col gap-2 max-w-[1440px]">
        <div className="py-5 w-full flex items-center justify-center">
          <h1 className="text-[30px] font-bold font-mono lg:text-[20px] sm:text-[16px]">
            Онлайн запись
          </h1>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="w-full flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-fit px-5 py-5 rounded-2xl bg-[#00d6d4] flex flex-col items-center gap-2"
            >
              <div className="relative">
                <Input
                  isRequired
                  className="max-w-xs min-w-[320px]"
                  type="string"
                  label="Имя"
                  placeholder="Введите имя"
                  {...register("firstName", {
                    required: "Заполните имя !",
                  })}
                />
                <span className="text-red-500 absolute top-1 right-2 text-[12px]">
                  {errors.firstName?.message}
                </span>
              </div>
              <div className="relative">
                <Input
                  isRequired
                  className="max-w-xs min-w-[320px]"
                  type="string"
                  label="Фамилия"
                  placeholder="Введите фамилию"
                  {...register("lastName", {
                    required: "Заполните фамилию !",
                  })}
                />
                <span className="text-red-500 absolute top-1 right-2 text-[12px]">
                  {errors.lastName?.message}
                </span>
              </div>
              <div className="relative">
                <Input
                  isRequired
                  className="max-w-xs min-w-[320px]"
                  type="string"
                  label="Номер телефона"
                  defaultValue="+996"
                  {...register("phoneNumber", {
                    required: "Заполните номер телфона !",
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
                <span className="text-red-500 absolute top-1 right-2 text-[12px]">
                  {errors.phoneNumber?.message}
                </span>
              </div>
              <div className="relative">
                <Select
                  label="Доктор"
                  placeholder="Выберите доктора"
                  isRequired
                  className="max-w-xs min-w-[320px]"
                  {...register("userId", {
                    required: "Выберите доктора !",
                  })}
                >
                  {PersonaData.map((animal: any) => (
                    <SelectItem key={animal.id} value={animal.id}>
                      {animal.fullName}
                    </SelectItem>
                  ))}
                </Select>
                <span className="text-red-500 absolute top-1 right-2 text-[12px]">
                  {errors.userId?.message}
                </span>
              </div>
              <div className="relative">
                <Select
                  label="Тип лечение"
                  placeholder="Выберите лечение"
                  isRequired
                  className="max-w-xs min-w-[320px]"
                  {...register("recordType", {
                    required: "Выберите тип записи !",
                  })}
                >
                  {RECORDTYPEDATA.map((animal) => (
                    <SelectItem key={animal.value} value={animal.value}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
                <span className="text-red-500 absolute top-1 right-2 text-[12px]">
                  {errors.recordType?.message}
                </span>
              </div>
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
                className="max-w-xs bg-white text-[#00d6d4] font-semibold"
                radius="sm"
                onClick={handleSubmit(onSubmit)}
                isDisabled={isData}
                isLoading={isLoading}
              >
                Записаться
              </Button>
            </form>
          </div>
          <div className="w-full md:hidden">
            <Image src={AppointmentPhoto} alt="appointmentPhoto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
