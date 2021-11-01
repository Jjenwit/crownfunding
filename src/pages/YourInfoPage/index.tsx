import { useContext } from 'react';
import { useHistory } from 'react-router';

import InfoContext from '../../contexts/InfoContext';

import styled from 'styled-components';

import Navbar from '../../components/Navbar';

import { IoScan } from 'react-icons/io5';

const Container = styled.div`
  color: var(--white);
  width: 60%;
  height: 90vh;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 3.2em;
  font-weight: 500;
  letter-spacing: 3px;
  color: var(--white);
  text-align: center;
  padding-top: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Subtitle = styled.h1`
  font-size: 1.6em;
  font-weight: 400;
  letter-spacing: 3px;
  color: var(--white);
  text-align: center;
  margin-top: 0px;
  margin-bottom: 40px;
`;

const Form = styled.form`
  font-size: 1.5em;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

const FormLabel = styled.label``;

const FormInput = styled.input`
  font-family: 'Kanit', sans-serif;
  font-size: 1em;
  height: 50px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  border: 3px solid var(--darkBlue);
  &:focus {
    outline: 3px solid var(--orange);
  }
`;

const FormSelect = styled.select`
  font-family: 'Kanit', sans-serif;
  font-size: 1em;
  height: 50px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  border: 3px solid var(--darkBlue);
  cursor: pointer;
  &:focus {
    outline: 3px solid var(--orange);
  }
`;

const FormOption = styled.option`
  font-family: 'Kanit', sans-serif;
  font-size: 1em;
  height: 50px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 30px;
  border: 3px solid var(--darkBlue);
  &:focus {
    outline: 3px solid var(--orange);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
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
  border-radius: 5px;
  cursor: pointer;
  &:active {
    background-color: var(--darkOrange);
  }
`;

const ScanBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Kanit', sans-serif;
  font-size: 1em;
  color: var(--white);
  background-color: var(--orange);
  height: 50px;
  width: 250px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  align-self: flex-end;
  cursor: pointer;
  &:active {
    background-color: var(--darkOrange);
  }
`;

const YourInfoPage: React.FC = () => {
  const infoContext = useContext(InfoContext);
  const {
    job,
    jobAge,
    income,
    limit,
    period,
    handleJobChange,
    handleJobAgeChange,
    handleIncomeChange,
    handleLimitChange,
    handlePeriodChange,
  } = infoContext;
  const history = useHistory();

  const onSubmit = (e: any) => {
    history.push('/results');
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>ทำความรู้จักกับคุณมากขึ้น</Title>
        <Subtitle>ข้อมูลของคุณจะถูกเก็บเป็นความลับ</Subtitle>
        <Form>
          <Wrapper>
            <FormControl>
              <FormLabel htmlFor="job">อาชีพ</FormLabel>
              <FormSelect
                required
                defaultValue={job}
                onChange={(e) => {
                  handleJobChange(e.target.value);
                }}
                id="job"
              >
                <FormOption value="" disabled>
                  โปรดระบุอาชีพ
                </FormOption>
                <FormOption value="พนักงานบริษัทเอกชน">
                  พนักงานบริษัทเอกชน
                </FormOption>
                <FormOption value="ข้าราชการ">ข้าราชการ</FormOption>
                <FormOption value="เจ้าของกิจการ">เจ้าของกิจการ</FormOption>
                <FormOption value="อาชีพอิสระ">อาชีพอิสระ</FormOption>
              </FormSelect>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="jobAge">อายุงาน</FormLabel>
              <FormSelect
                required
                defaultValue={jobAge}
                onChange={(e) => {
                  handleJobAgeChange(e.target.value);
                }}
                id="jobAge"
              >
                <FormOption value="" disabled>
                  โปรดระบุอายุงาน
                </FormOption>
                <FormOption value="6">น้อยกว่า 6 เดือน</FormOption>
                <FormOption value="9">6 เดือน - 1 ปี</FormOption>
                <FormOption value="12">1 ปีขึ้นไป</FormOption>
              </FormSelect>
            </FormControl>
          </Wrapper>
          <Wrapper>
            <FormControl>
              <FormLabel htmlFor="income">รายได้ต่อเดือน</FormLabel>
              <FormInput
                required
                type="number"
                placeholder={'0'}
                value={income}
                onChange={(e) => {
                  handleIncomeChange(e.target.value);
                }}
                id="income"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="limit">วงเงินกู้ยืมที่ต้องการ</FormLabel>
              <FormInput
                required
                type="number"
                placeholder={'วงเงินกู้สูงสุด 2,000,000'}
                value={limit}
                onChange={(e) => {
                  handleLimitChange(e.target.value);
                }}
                id="limit"
              />
            </FormControl>
          </Wrapper>
          <Wrapper>
            <FormControl>
              <FormLabel htmlFor="period">ระยะเวลากู้สินเชื่อ</FormLabel>
              <FormSelect
                required
                defaultValue={period}
                onChange={(e) => {
                  handlePeriodChange(e.target.value);
                }}
                id="period"
              >
                <FormOption value="" disabled>
                  กรุณาเลือกจาก
                </FormOption>
                <FormOption value="12">12 เดือน</FormOption>
                <FormOption value="18">18 เดือน</FormOption>
                <FormOption value="24">24 เดือน</FormOption>
                <FormOption value="30">30 เดือน</FormOption>
                <FormOption value="36">36 เดือน</FormOption>
                <FormOption value="48">48 เดือน</FormOption>
                <FormOption value="60">60 เดือน</FormOption>
              </FormSelect>
            </FormControl>
            <ScanBtn type="button">
              <IoScan /> Scan Document
              <span></span>
            </ScanBtn>
          </Wrapper>
          <Wrapper>
            <NextBtn type="button" onClick={onSubmit}>
              ดำเนินการต่อ
            </NextBtn>
          </Wrapper>
        </Form>
      </Container>
    </>
  );
};

export default YourInfoPage;
