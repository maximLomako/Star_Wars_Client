import React, {ChangeEvent} from "react";

interface TextAreaFieldType {
  value: string
  changeInputValue: (newValue: string) => void
}

export const TextAreaField: React.FC<TextAreaFieldType> = (props) => {
  const {value, changeInputValue} = props;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    changeInputValue(e.currentTarget.value)
  }

  return (
    <input
      value={value}
      onChange={onChangeHandler}
    />
  )
}