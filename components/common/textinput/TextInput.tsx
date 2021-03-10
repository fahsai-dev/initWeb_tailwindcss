import * as React from "react";
interface ITextInput {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeText?: (value: string) => void;
  isValid?: boolean;
  validText?: string;
}

const TextInput: React.FunctionComponent<ITextInput> = (props) => {
  const { value, placeholder, disabled, onChangeText, isValid, validText, ...rest } = props;

  const createStyles = () => {
    let createStyles = ""
    if (disabled) { createStyles = "bg-disabledBg" }
    return createStyles;
  }

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={`focus:border-darkOutline focus:outline-none block w-full sm:text-base border border-outline rounded-md h-10 px-2 ${createStyles()}`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onChangeText && onChangeText(e.target.value) }}
        {...rest}
      />
      {
        isValid === false
        && <label className="text-sm text-error">{validText || 'Required'}</label>
      }
    </div>
  );
};

export default TextInput;
