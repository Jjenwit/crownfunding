import React, { useContext } from 'react';
import InfoContext from '../../contexts/InfoContext';
import { useHistory } from 'react-router';

import Navbar from '../../components/Navbar';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 3em;
  color: white;
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.5em;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-bottom: 30px;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 50%;
  }

  @media screen and (max-width: 900px) {
    width: 60%;
  }

  @media screen and (max-width: 700px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const FormLabel = styled.label`
  color: white;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    font-size: 0.9em;
  }
`;

const FormInput = styled.input`
  font-family: 'Kanit', sans-serif;
  text-align: center;
  font-size: 1em;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  border: 3px solid var(--darkBlue);
  &:focus {
    outline: 3px solid var(--orange);
  }
`;

const NextBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Kanit', sans-serif;
  font-size: 1em;
  color: var(--white);
  background-color: var(--orange);
  height: 50px;
  width: 250px;
  padding: 15px;
  border: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    background-color: var(--darkOrange);
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9em;
  }
`;

const AdjustPage: React.FC = () => {
  const infoContext = useContext(InfoContext);
  const {
    monthlyValue,
    interest,
    totalValue,
    handleMonthlyValueChange,
    handleInterestChange,
    handleTotalValueChange,
    calculateLoan,
  } = infoContext;

  const history = useHistory();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calculateLoan();
    history.push('/yourloan');
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>ปรับเเต่งสินเชื่อของคุณ</Title>
        <Form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel htmlFor="monthly">ยอมผ่อนชำระต่อเดือน</FormLabel>
            <FormInput
              id="monthly"
              type="number"
              value={monthlyValue}
              onChange={(e) => handleMonthlyValueChange(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="interest">{'อัตราดอกเบี้ย(ต่อปี)'}</FormLabel>
            <FormInput
              id="interest"
              type="number"
              value={interest}
              onChange={(e) => handleInterestChange(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="total">จำนวนเงินที่ต้องจ่ายทั้งหมด</FormLabel>
            <FormInput
              id="total"
              type="number"
              value={totalValue}
              onChange={(e) => handleTotalValueChange(e.target.value)}
              required
            />
          </FormControl>
          <NextBtn>คำนวณสินเชื่อ</NextBtn>
        </Form>
      </Container>
    </>
  );
};

export default AdjustPage;
