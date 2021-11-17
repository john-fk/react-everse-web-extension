import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import store from 'store';
import { useRecoilState } from 'recoil';
import { currentUserName } from '../../EverseStates';

// ! Danjuma get the auth docs for chrome extensions with firebase here: https://firebase.google.com/docs/auth/web/google-signin
const OnBoarding = () => {
  return (
    <>
      <Container>
        <Image src="./img/LOGO-128.png" />
        <Title>Hi! what's your name?</Title>
        <BoardingForm />
      </Container>
    </>
  );
};

const BoardingForm = () => {
  const [userName, setUserName] = useRecoilState(currentUserName);

  const onFinish = (values) => {
    console.log('Success:', values);
    //  store.set('has_boarded', values) // Stores input value in LS ;
    setUserName(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="onBoardingFrom"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="inline"
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
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default OnBoarding;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Image = styled.img`
  width: 10em;
  height: 10em;
  background-color: black;
  border-radius: 50px;
`;

const Title = styled.h2`
  margin: 1em auto;
`;

const NameInput = styled.div`
  & > input {
    background: none !important;
    border: none !important;
    outline: none !important;
    border-bottom: 1px solid $-color-gray !important;

    text-align: center;
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
