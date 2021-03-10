import * as React from "react";

interface ICheckbox {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  description?: string;
  onCheck?: (value: boolean) => void;
}

const Checkbox: React.FunctionComponent<ICheckbox> = (props) => {
  const {
    checked,
    disabled,
    name,
    description,
    onCheck,
    ...rest
  } = props;

  const createStyles = () => {
    let createStyles = "";
    if (disabled) {
      createStyles = "bg-disabledBg bg-gray-300";
    }
    return createStyles;
  };
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          checked={checked}
          id="check"
          name={name}
          type="checkbox"
          className="rounded border-outline text-primary w-4 h-4 focus:ring-0"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onCheck && onCheck(e.target.checked) }}
          {...rest}
        />
      </div>
      <div className="ml-3 text-sm">
        <label className="font-medium text-gray-700">
          {name}
        </label>
        <p className="text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Checkbox;