export const generateObject = (
  array: { [key: string]: any }[],
  id: number | null,
  key: string
) => {
  const filteredData = array.flatMap((item: any) =>
    item[key].filter((el: any) => el.id === id)
  );

  const resultObject = Object.assign({}, ...filteredData);
  return resultObject;
};
