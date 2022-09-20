import React from "react";

export const FormErrors = ({formErrors}) => {
  return (
    <div className="text-danger">
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          return (
            <p key={i}>
              {formErrors[fieldName]}
            </p>
          );
        } else {
          return '';
        }
      })}
    </div>
  );
};
