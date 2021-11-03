import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import CarRefinanceContext from '../../contexts/CarRefinanceContext';

import styled from 'styled-components';

import Navbar from '../../components/Navbar';

const Container = styled.div`
  color: var(--white);
  width: 60%;
  height: 90vh;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1300px) {
    width: 80%;
  }
  @media screen and (max-width: 1020px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 3.2em;
  font-weight: 500;
  letter-spacing: 3px;
  color: var(--white);
  text-align: center;
  padding-top: 20px;
  margin-top: 0px;
  margin-bottom: 25px;

  @media screen and (max-width: 620px) {
    font-size: 2.5em;
  }
`;

const Form = styled.form`
  font-size: 1.5em;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;

  @media screen and (max-width: 850px) {
    width: 90%;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
  }
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

  @media screen and (max-width: 850px) {
    flex-wrap: wrap;
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
  margin-top: 70px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    background-color: var(--darkOrange);
  }

  @media screen and (max-width: 850px) {
    margin-bottom: 30px;
  }
`;

const CarRefinancePage: React.FC = () => {
  const carRefinanceContext = useContext(CarRefinanceContext);
  const {
    price,
    debt,
    monthlyValue,
    period,
    income,
    bank,
    job,
    residence,
    brand,
    model,
    year,
    handlePriceChange,
    handleDebtChange,
    handleMonthlyValueChange,
    handlePeriodChange,
    handleIncomeChange,
    handleBankChange,
    handleJobChange,
    handleResidenceChange,
    handleBrandChange,
    handleModelChange,
    handleYearChange,
  } = carRefinanceContext;
  const history = useHistory();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/refinance/car/results');
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>รีไฟเเนนซ์รถ</Title>
        <Form onSubmit={onSubmit}>
          <Wrapper>
            <FormControl>
              <FormLabel htmlFor="price">ราคารถที่ซื้อ</FormLabel>
              <FormInput
                required
                type="number"
                placeholder={'0'}
                value={price}
                onChange={(e) => {
                  handlePriceChange(e.target.value);
                }}
                id="price"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="debt">ยอดหนี้คงเหลือ</FormLabel>
              <FormInput
                required
                type="number"
                placeholder={'0'}
                value={debt}
                onChange={(e) => {
                  handleDebtChange(e.target.value);
                }}
                id="debt"
              />
            </FormControl>
          </Wrapper>
          <Wrapper>
            <FormControl>
              <FormLabel htmlFor="monthlyValue">ผ่อนต่อเดือน</FormLabel>
              <FormInput
                required
                type="number"
                placeholder={'0'}
                value={monthlyValue}
                onChange={(e) => {
                  handleMonthlyValueChange(e.target.value);
                }}
                id="monthlyValue"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="period">ต้องผ่อนอีกกี่ปี</FormLabel>
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
                <FormOption value="1">1 ปี</FormOption>
                <FormOption value="2">2 ปี</FormOption>
                <FormOption value="3">3 ปี</FormOption>
                <FormOption value="4">4 ปี</FormOption>
                <FormOption value="5">5 ปี</FormOption>
                <FormOption value="6">6 ปี</FormOption>
                <FormOption value="7">7 ปี</FormOption>
                <FormOption value="8">8 ปี</FormOption>
                <FormOption value="9">9 ปี</FormOption>
                <FormOption value="10">10 ปี</FormOption>
                <FormOption value="11">11 ปี</FormOption>
                <FormOption value="12">12 ปี</FormOption>
                <FormOption value="13">13 ปี</FormOption>
                <FormOption value="14">14 ปี</FormOption>
                <FormOption value="15">15 ปี</FormOption>
                <FormOption value="16">16 ปี</FormOption>
                <FormOption value="17">17 ปี</FormOption>
                <FormOption value="18">18 ปี</FormOption>
                <FormOption value="19">19 ปี</FormOption>
                <FormOption value="20">20 ปี</FormOption>
                <FormOption value="21">21 ปี</FormOption>
                <FormOption value="22">22 ปี</FormOption>
                <FormOption value="23">23 ปี</FormOption>
                <FormOption value="24">24 ปี</FormOption>
                <FormOption value="25">25 ปี</FormOption>
                <FormOption value="26">26 ปี</FormOption>
                <FormOption value="27">27 ปี</FormOption>
                <FormOption value="28">28 ปี</FormOption>
                <FormOption value="29">29 ปี</FormOption>
                <FormOption value="30">30 ปี</FormOption>
                <FormOption value="100">มากกว่า 30 ปี</FormOption>
              </FormSelect>
            </FormControl>
          </Wrapper>
          <Wrapper>
            <FormControl>
              <FormLabel htmlFor="income">รายได้รวมต่อเดือน</FormLabel>
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
              <FormLabel htmlFor="bank">ธนาคารที่ผ่อนปัจจุบัน</FormLabel>
              <FormSelect
                required
                defaultValue={bank}
                onChange={(e) => {
                  handleBankChange(e.target.value);
                }}
                id="bank"
              >
                <FormOption value="" disabled>
                  โปรดเลือกธนาคาร
                </FormOption>
                <FormOption value="BAY">กรุงศรีอยุธยา</FormOption>
                <FormOption value="GSB">ออมสิน</FormOption>
                <FormOption value="CIMB">ซีไอเอ็มบี</FormOption>
                <FormOption value="SCB">ไทยพาณิชย์</FormOption>
                <FormOption value="TCR">ไทยเครดิต</FormOption>
                <FormOption value="LHBANK">เเลนด์ เเอนด์ เฮ้าส์</FormOption>
                <FormOption value="KTB">กรุงไทย</FormOption>
                <FormOption value="TMB">ทหารไทย</FormOption>
                <FormOption value="UOB">ยูโอบี</FormOption>
                <FormOption value="GHB">ธนาคารอาคารสงเคราะห์</FormOption>
                <FormOption value="BOC">ธนาคารเเห่งประเทศจีน</FormOption>
                <FormOption value="KBANK">กสิกรไทย</FormOption>
                <FormOption value="SC">สเเตนดาร์ดชาร์เตอร์ด</FormOption>
                <FormOption value="TBANK">ธนชาต</FormOption>
                <FormOption value="KKB">เกียรตินาคิน</FormOption>
                <FormOption value="TISCO">ทิสโก้</FormOption>
                <FormOption value="CITI">ซิตี้เเบงก์</FormOption>
                <FormOption value="BBL">กรุงเทพ</FormOption>
                <FormOption value="SMC">บรรษัทรองตลาดสินเชื่อ</FormOption>
                <FormOption value="OTHERS">สถาบันการเงินอื่นๆ</FormOption>
              </FormSelect>
            </FormControl>
          </Wrapper>

          <Wrapper></Wrapper>
          <Wrapper></Wrapper>
          <Wrapper></Wrapper>

          <Wrapper>
            <FormControl>
              <FormLabel htmlFor="job">อาชีพปัจจุบัน</FormLabel>
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
              <FormLabel htmlFor="residence">ประเภทที่อยู่อาศัย</FormLabel>
              <FormSelect
                required
                defaultValue={residence}
                onChange={(e) => {
                  handleResidenceChange(e.target.value);
                }}
                id="residence"
              >
                <FormOption value="" disabled>
                  โปรดระบุประเภทที่อยู่อาศัย
                </FormOption>
                <FormOption value="บ้าน (บ้านเดี่ยว,บ้านเเฝด,ทาวน์เฮาส์,ทาวน์โฮม">
                  บ้าน (บ้านเดี่ยว,บ้านเเฝด,ทาวน์เฮาส์,ทาวน์โฮม)
                </FormOption>
                <FormOption value="คอนโดมิเนียม (ห้องชุดพักอาศัย)">
                  คอนโดมิเนียม (ห้องชุดพักอาศัย)
                </FormOption>
                <FormOption value="ตึกพาณิชย์ (ใช้ประกอบธุรกิจ)">
                  ตึกพาณิชย์ (ใช้ประกอบธุรกิจ)
                </FormOption>
                <FormOption value="ตึกพาณิชย์ (ใช้พักอาศัย)">
                  ตึกพาณิชย์ (ใช้พักอาศัย)
                </FormOption>
              </FormSelect>
            </FormControl>
          </Wrapper>

          <Wrapper>
            <FormControl>
              <FormLabel htmlFor="brand">เลือกยี่ห้อรถ</FormLabel>
              <FormSelect
                required
                defaultValue={brand}
                onChange={(e) => {
                  handleBrandChange(e.target.value);
                }}
                id="brand"
              >
                <FormOption value="" disabled>
                  โปรดเลือกยี่ห้อรถ
                </FormOption>
                <FormOption value="Toyota">Toyota</FormOption>
                <FormOption value="Isuzu">Isuzu</FormOption>
                <FormOption value="Honda">Honda</FormOption>
                <FormOption value="Mitsubishi">Mitsubishi</FormOption>
                <FormOption value="Ford">Ford</FormOption>
                <FormOption value="Nissan">Nissan</FormOption>
                <FormOption value="Mazda">Mazda</FormOption>
                <FormOption value="Suzuki">Suzuki</FormOption>
                <FormOption value="MG">MG</FormOption>
                <FormOption value="BMW">BMW</FormOption>
                <FormOption value="Mercedes-Benz">Mercedes-Benz</FormOption>
                <FormOption value="Rolls-Royce">Rolls-Royce</FormOption>
                <FormOption value="Porsche">Porsche</FormOption>
                <FormOption value="McLaren">McLaren</FormOption>
                <FormOption value="Maserati">Maserati</FormOption>
                <FormOption value="Lotus">Lotus</FormOption>
                <FormOption value="Lamborghini">Lamborghini</FormOption>
                <FormOption value="Ferrari">Ferrari</FormOption>
                <FormOption value="Bently">Bentley</FormOption>
                <FormOption value="Aston Martin">Aston Martin</FormOption>
                <FormOption value="Volvo">Volvo</FormOption>
                <FormOption value="Skoda">Skoda</FormOption>
                <FormOption value="Seat">Seat</FormOption>
                <FormOption value="Peugeot">Peugeot</FormOption>
                <FormOption value="Fiat">Fiat</FormOption>
                <FormOption value="Citroen">Citroen</FormOption>
                <FormOption value="Alfa Romeo">Alfa Romeo</FormOption>
                <FormOption value="Volkswagen">Volkswagen</FormOption>
                <FormOption value="Subaru">Subaru</FormOption>
                <FormOption value="Rover">Rover</FormOption>
                <FormOption value="Mini">Mini</FormOption>
                <FormOption value="Lexus">Lexus</FormOption>
                <FormOption value="Land Rover">Land Rover</FormOption>
                <FormOption value="Jaguar">Jaguar</FormOption>
                <FormOption value="Audi">Audi</FormOption>
                <FormOption value="Hyundai">Hyundai</FormOption>
                <FormOption value="Ducati">Ducati</FormOption>
              </FormSelect>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="model">เลือกรุ่นรถ</FormLabel>
              <FormInput
                required
                type="text"
                placeholder={'โปรดเลือกรุ่นรถ'}
                value={model}
                onChange={(e) => {
                  handleModelChange(e.target.value);
                }}
                id="model"
              />
            </FormControl>
          </Wrapper>
          <Wrapper>
            <FormControl>
              <FormLabel htmlFor="year">เลือกปี ค.ศ. รถ</FormLabel>
              <FormSelect
                required
                defaultValue={year}
                onChange={(e) => {
                  handleYearChange(e.target.value);
                }}
                id="year"
              >
                <FormOption value="" disabled>
                  ค.ศ.
                </FormOption>
                <FormOption value="2020">2020</FormOption>
                <FormOption value="2019">2019</FormOption>
                <FormOption value="2018">2018</FormOption>
                <FormOption value="2017">2017</FormOption>
                <FormOption value="2016">2016</FormOption>
                <FormOption value="2015">2015</FormOption>
                <FormOption value="2014">2014</FormOption>
                <FormOption value="2013">2013</FormOption>
                <FormOption value="2012">2012</FormOption>
                <FormOption value="2011">2011</FormOption>
                <FormOption value="2010">2010</FormOption>
                <FormOption value="2009">2009</FormOption>
                <FormOption value="2008">2008</FormOption>
                <FormOption value="2007">2007</FormOption>
                <FormOption value="2006">2006</FormOption>
                <FormOption value="2005">2005</FormOption>
                <FormOption value="2004">2004</FormOption>
                <FormOption value="2003">2003</FormOption>
                <FormOption value="2002">2002</FormOption>
                <FormOption value="2001">2001</FormOption>
                <FormOption value="2000">2000</FormOption>
                <FormOption value="1000">ก่อน 2000</FormOption>
              </FormSelect>
            </FormControl>
          </Wrapper>
          <Wrapper>
            <NextBtn>ค้นหาโปรโมชั่น</NextBtn>
          </Wrapper>
        </Form>
      </Container>
    </>
  );
};

export default CarRefinancePage;
