import * as React from "react";
interface ITextArea {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChangeText?: (value: string) => void;
  isValid?: boolean;
  validText?: string;
}

const TextArea: React.FunctionComponent<ITextArea> = (props) => {
  const { value, placeholder, disabled, onChangeText, isValid, validText, ...rest } = props;

  const createStyles = () => {
    let createStyles = ""
    if (disabled) { createStyles = "bg-disabledBg" }
    return createStyles;
  }

  return (
    <div>
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        rows={3}
        className={`focus:border-darkOutline focus:outline-none block w-full text-base border border-outline rounded-md px-2 ${createStyles()}`}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { onChangeText && onChangeText(e.target.value) }}
        {...rest}
      />
      {
        isValid === false
        && <label className="text-sm text-error">{validText || 'Required'}</label>
      }
    </div>
  );
};

export default TextArea;
