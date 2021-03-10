import * as React from "react";

export interface IDropdownItem {
  label: string;
  value: any;
}
interface IDropdownSelect {
  placeholder?: string;
  label?: string;
  optionsData: IDropdownItem[];
  selected?: null | string;
  onChange?: (selected: string) => void;
}

const DropdownSelect: React.FunctionComponent<IDropdownSelect> = (props) => {
  const { label, optionsData, selected, onChange, placeholder } = props;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        placeholder={label}
        value={selected || "placeholder"}
        className={`focus:border-darkOutline focus:outline-none block w-full sm:text-base border border-outline rounded-md h-10 px-2`}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { onChange && onChange(e.target.value); }}
      >
        {placeholder && <option key={null} disabled value="placeholder">{placeholder}</option>}
        {optionsData && optionsData.map((data) => <option key={data.value} value={data.value}>{data.label}</option>)}
      </select>
    </div>
  );
};

export default DropdownSelect;
