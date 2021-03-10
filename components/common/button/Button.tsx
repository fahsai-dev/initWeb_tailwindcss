import * as React from "react";

interface IButton {
  title: string;
  onClick?: (() => void);
  styleClass?: string;
  disabled?: boolean;
  outline?: boolean;
}

const ButtonStyle: React.FunctionComponent<IButton> = (props) => {
  const { styleClass, title, onClick, disabled, outline, ...rest } = props;

  const createStyles = () => {
    let createStyles = ""
    if (disabled && outline) {
      createStyles = "cursor-default"
    } else if (disabled) {
      createStyles = "bg-disabled cursor-default"
    }
    return createStyles;
  }

  const buttonStyle = () => {
    let buttonStyle = ""
    if (disabled && outline) {
      buttonStyle = "border text-gray-300"
    } else if (outline) {
      buttonStyle = "border border-primary text-primary bg-transparent"
    } else {
      buttonStyle = "text-white bg-primary"
    }
    return buttonStyle;
  }

  return (
    <button
      type="button"
      className={`rounded px-6 py-1 flex items-center justify-center focus:outline-none ${buttonStyle()} ${createStyles()} ${styleClass}`}
      onClick={() => { if (!disabled && onClick) onClick() }}
      {...rest}>
      {title}
    </button>
  );
};

export default ButtonStyle;
