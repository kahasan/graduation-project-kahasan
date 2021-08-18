/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';

import { Flex, Button } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  year: yup.number().min(1920).max(2003).required(),
  address: yup.string().required(),
});

export default function ApplicationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDir="column">
        <FormInput label="firstName" inputTitle="First Name" register={register} errors={errors} required />
        <FormInput label="lastName" inputTitle="Last Name" register={register} errors={errors} required />
        <FormInput label="year" inputTitle="Year of Birth" register={register} errors={errors} required />
        <FormTextArea label="address" inputTitle="Address" register={register} errors={errors} required />
        <Button
          isLoading={false}
          loadingText="Sending"
          variant="outline"
          colorScheme="teal"
          type="submit"
        >
          Send
        </Button>
      </Flex>
    </form>

  );
}
