import { useGetPersonalQuery } from "@/services/personal.service";
import { RECORDTYPEDATA } from "@/utils/constants/appointment.constant";
import { Select, SelectItem, Input, Button } from "@nextui-org/react";

export const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

export const Appointments = () => {
  const { data } = useGetPersonalQuery();

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
            {animals.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
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
          <Button className="max-w-xs bg-[#f4f4f5]" radius="sm">
            Записаться
          </Button>
        </div>
      </div>
    </div>
  );
};

const data = {
  startDate: "2023-12-27",
  startTime: "09:00:00",
  endTime: "09:30:00",
  recordType: "TREATMENT",
};
