import React, { FC } from "react";

interface Props {
  name: string;
  value: Array<string>;
}

const CheckboxContainer: FC<Props> = (props) => {
  const { name, value } = props;
  return (
    <>
      {value.map((item, index) => (
        <label key={index}>
          <input type="radio" name={name} />
          {item}
        </label>
      ))}
    </>
  );
};

export default CheckboxContainer;
