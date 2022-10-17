import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({
  data,
  icon,
  name,
  numOfColumns,
  placeholder,
  PickerItemComponent,
  width,
  numberOfColumns,
  ...otherProps
}) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <Picker
        items={data}
        icon={icon}
        numberOfColumns={numberOfColumns}
        numOfColumns={numOfColumns}
        onItemSelect={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
