/* eslint-disable react/prop-types */
import React from 'react';
import { PLANETS, PLANETSELECTHELPERTEXT } from 'CONSTANS';
import { FormSelect } from 'components';

export function FormSelectContainer({
  register, errors, required, disabled, value,
}) {
  return (
    <>
      <FormSelect
        label="planetOfBirth"
        helperText={PLANETSELECTHELPERTEXT}
        inputTitle="Planet of Birth"
        register={register}
        errors={errors}
        required={required}
        disabled={disabled}
        value={value}
        placeholder="Select a planet"
      >
        {PLANETS.map(({ name, id }) => (
          <option key={id} value={name}>{name}</option>
        ))}

      </FormSelect>
    </>
  );
}
