import { Select } from "flowbite-react";

interface ChangeElementsSizePropsI {
  limitNumber: number;
  setLimitNumber: (num: number) => void;
}

const selectOptions = [6, 10, 15, 20];

export const ChangeElementsSize = ({ limitNumber = 6, setLimitNumber }: ChangeElementsSizePropsI) => {

  const onSelectChange = (e: any) => {
    setLimitNumber(e.target.value);
  };

  return (
    <div className="flex items-center justify-center mb-[30px]">
      <div>Elements on 1 page:</div>
      <Select
        className="w-[100px] ml-[20px] mr-[5px]"
        onChange={onSelectChange}
        value={limitNumber}
      >
        {selectOptions.map((option) => {
          return <option key={option}>
            {option}
          </option>;
        })}
      </Select>

    </div>
  );
};

