"use client";

import { usePostAppointmentMutation } from "@/services/appoinment.service";
import { useGetPersonalQuery } from "@/services/personal.service";
import { RECORDTYPEDATA } from "@/utils/constants/appointment.constant";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";

export const Appointments = () => {
  const { data: PersonaData = [] } = useGetPersonalQuery(1);
  const [handlePost] = usePostAppointmentMutation();
  const data = {
    userId: 50,
    firstName: "Abuali",
    lastName: "Melisov",
    phoneNumber: "996593232423",
    startDate: "2024-01-10",
    startTime: "11:00:00",
    endTime: "11:30:00",
    recordType: "TREATMENT",
  };

  const handleClick = async () => {
    try {
      const response = await handlePost(data).unwrap();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="w-[100vw] bg-[#eef9f9] relative flex justify-center items-start py-10 text-center">
      <div className="w-full flex flex-col items-center justify-between gap-2 max-w-[1440px]">
        <div className="w-full flex flex-col items-center gap-2">
          <Input
            className="max-w-xs"
            type="string"
            label="Имя"
            placeholder="Введите имя"
          />
          <Input
            className="max-w-xs"
            type="string"
            label="Фамилия"
            placeholder="Введите фамилию"
          />
          <Input
            className="max-w-xs"
            type="string"
            label="Номер телефона"
            defaultValue="+996"
          />
          <Select
            label="Доктор"
            placeholder="Выберите доктора"
            className="max-w-xs"
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
            className="max-w-xs"
          >
            {RECORDTYPEDATA.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem>
            ))}
          </Select>
          <Button
            className="max-w-xs bg-[#f4f4f5]"
            radius="sm"
            onClick={handleClick}
          >
            Записаться
          </Button>
        </div>
      </div>
    </div>
  );
};
