import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import Navbar from '../../components/Navbar';
import { IoCaretForward, IoCaretDown } from 'react-icons/io5';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  height: 90vh;
  box-sizing: border-box;
  padding-top: 60px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1300px) {
    width: 50%;
  }
  @media screen and (max-width: 1020px) {
    width: 70%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 4.2em;
  font-weight: 500;
  letter-spacing: 3px;
  color: var(--white);
  text-align: center;
  margin-bottom: 100px;

  @media screen and (max-width: 900px) {
    font-size: 3em;
  }

  @media screen and (max-width: 600px) {
    font-size: 2.7em;
  }
  @media screen and (max-width: 450px) {
    font-size: 2.5em;
  }
  @media screen and (max-width: 360px) {
    font-size: 2em;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  color: var(--darkBlue);
  box-sizing: border-box;
  padding: 10px;
  background-color: var(--white);
  border: 5px solid var(--darkBlue);
  border-radius: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover {
    color: var(--white);
    background-color: var(--orange);
  }
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  color: var(--darkBlue);
  background-color: var(--white);
  box-sizing: border-box;
  padding: 10px;
  border: 5px solid var(--darkBlue);
  border-radius: 30px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    color: var(--white);
    background-color: var(--orange);
  }
`;

const Option = styled.div`
  position: relative;
  min-width: 100px;
  text-align: center;
  font-size: 1.5em;
  color: var(--darkBlue);
  align-self: flex-end;
  box-sizing: border-box;
  padding: 5px;
  background-color: var(--white);
  border: 5px solid var(--darkBlue);
  border-radius: 15px;
  margin-bottom: 5px;
  cursor: pointer;
  &:hover {
    color: var(--white);
    background-color: var(--orange);
    /* transform: translateX(20px);
    transition: transform 0.5s; */
  }
`;

const Orange = styled.span`
  color: var(--orange);
`;

const LandingPage: React.FC = () => {
  const [hasOptions, setHasOptions] = useState(false);
  const [options, setOptions] = useState<React.ReactNode>([]);
  const history = useHistory();

  const addOptions = () => {
    setHasOptions(true);
    setOptions([
      <Option onClick={() => history.push('/refinance/home')} key="home">
        บ้าน
      </Option>,
      <Option onClick={() => history.push('/refinance/car')} key="car">
        รถ
      </Option>,
    ]);
  };

  const removeOptions = () => {
    setHasOptions(false);
    setOptions([]);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>
          เรื่อง<Orange>กู้ยืม</Orange>ไว้ใจเรา!
        </Title>
        <Button onClick={() => history.push('/yourinfo')}>
          <span></span>
          เช็คเรทเงินกู้ที่ดีที่สุด <IoCaretForward />
        </Button>
        <Dropdown onClick={!hasOptions ? addOptions : removeOptions}>
          <span></span>
          เช็คเรทรีไฟเเนนซ์
          <IoCaretDown />
        </Dropdown>
        {options}
      </Container>
    </>
  );
};

export default LandingPage;
