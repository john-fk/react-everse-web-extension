import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';

import { appColors } from '../../utils';

const BoardingForm = ({ onSubmit }) => {
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <FormContainer>
      <Form
        name="onBoardingFrom"
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="inline"
        className="d-flex justify-content-between"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please enter a valid name',
            },
          ]}
        >
          <NameInput>
            <Input placeholder="Enter your name" />
          </NameInput>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  min-width: 20rem;
`;

const NameInput = styled.div`
  width: 120%;
  & > input {
    background: none !important;
    border: none !important;
    outline: none !important;
    border-bottom: 1px solid ${appColors.bluePrimary} !important;

    border-radius: 0 !important;

    &::placeholder {
      color: $-color-light !important;
    }
    &:focus {
      box-shadow: none !important;
      background: transparent !important;
    }
  }
`;

export default BoardingForm;
