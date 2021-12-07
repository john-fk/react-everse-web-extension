import React from 'react';
import styled from 'styled-components';
import store from 'store';
import { useRecoilState } from 'recoil';
import { currentUserName } from '../../EverseStates';
import BoardingForm from '../../components/core/BoardingForm';

const OnBoarding = () => {
  const [userName, setUserName] = useRecoilState(currentUserName);

  const onFinish = (values) => {
    setUserName(values);
    store.set('user_name', values);
  };

  return (
    <>
      <Container>
        <Image src="./img/LOGO-128.png" />
        <Title>Hi! what's your name?</Title>
        <BoardingForm onSubmit={onFinish} />
      </Container>
    </>
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
