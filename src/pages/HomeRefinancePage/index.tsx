import React, { useContext } from 'react';
import { useHistory } from 'react-router';

import HomeRefinanceContext from '../../contexts/HomeRefinanceContext';

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
  -webkit-appearance: none;
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

const HomeRefinancePage: React.FC = () => {
  const homeRefinanceContext = useContext(HomeRefinanceContext);
  const {
    price,
    debt,
    monthlyValue,
    period,
    income,
    bank,
    job,
    residence,
    province,
    handlePriceChange,
    handleDebtChange,
    handleMonthlyValueChange,
    handlePeriodChange,
    handleIncomeChange,
    handleBankChange,
    handleJobChange,
    handleResidenceChange,
    handleProvinceChange,
  } = homeRefinanceContext;
  const history = useHistory();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push('/refinance/home/results');
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>รีไฟเเนนซ์บ้าน</Title>
        <Form onSubmit={onSubmit}>
          <Wrapper>
            <FormControl>
              <FormLabel htmlFor="price">ราคาบ้านที่ซื้อ</FormLabel>
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
              <FormLabel htmlFor="debt">ยอดหนี้บ้านคงเหลือ</FormLabel>
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
              <FormLabel htmlFor="province">
                จังหวัดของบ้านที่จะรีไฟเเนนซ์
              </FormLabel>
              <FormSelect
                required
                defaultValue={province}
                onChange={(e) => {
                  handleProvinceChange(e.target.value);
                }}
                id="province"
              >
                <FormOption value="" disabled>
                  โปรดเลือก
                </FormOption>
                <FormOption value="กรุงเทพมหานคร">กรุงเทพมหานคร</FormOption>
                <FormOption value="กระบี่">กระบี่</FormOption>
                <FormOption value="กาญจนบุรี">กาญจนบุรี</FormOption>
                <FormOption value="กาฬสินธุ์">กาฬสินธุ์</FormOption>
                <FormOption value="กำแพงเพชร">กำแพงเพชร</FormOption>
                <FormOption value="ขอนแก่น">ขอนแก่น</FormOption>
                <FormOption value="จันทบุรี">จันทบุรี</FormOption>
                <FormOption value="ฉะเชิงเทรา">ฉะเชิงเทรา</FormOption>
                <FormOption value="ชลบุรี">ชลบุรี</FormOption>
                <FormOption value="ชัยนาท">ชัยนาท</FormOption>
                <FormOption value="ชัยภูมิ">ชัยภูมิ</FormOption>
                <FormOption value="ชุมพร">ชุมพร</FormOption>
                <FormOption value="ตรัง">ตรัง</FormOption>
                <FormOption value="ตราด">ตราด</FormOption>
                <FormOption value="ตาก">ตาก</FormOption>
                <FormOption value="นครนายก">นครนายก</FormOption>
                <FormOption value="นครปฐม">นครปฐม</FormOption>
                <FormOption value="นครพนม">นครพนม</FormOption>
                <FormOption value="นครราชสีมา">นครราชสีมา</FormOption>
                <FormOption value="นครศรีธรรมราช">นครศรีธรรมราช</FormOption>
                <FormOption value="นครสวรรค์">นครสวรรค์</FormOption>
                <FormOption value="นนทบุรี">นนทบุรี</FormOption>
                <FormOption value="นราธิวาส">นราธิวาส</FormOption>
                <FormOption value="น่าน">น่าน</FormOption>
                <FormOption value="บึงกาฬ">บึงกาฬ</FormOption>
                <FormOption value="บุรีรัมย์">บุรีรัมย์</FormOption>
                <FormOption value="ปทุมธานี">ปทุมธานี</FormOption>
                <FormOption value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</FormOption>
                <FormOption value="ปราจีนบุรี">ปราจีนบุรี</FormOption>
                <FormOption value="ปัตตานี">ปัตตานี</FormOption>
                <FormOption value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</FormOption>
                <FormOption value="พะเยา">พะเยา</FormOption>
                <FormOption value="พังงา">พังงา</FormOption>
                <FormOption value="พัทลุง">พัทลุง</FormOption>
                <FormOption value="พิจิตร">พิจิตร</FormOption>
                <FormOption value="พิษณุโลก">พิษณุโลก</FormOption>
                <FormOption value="ภูเก็ต">ภูเก็ต</FormOption>
                <FormOption value="มหาสารคาม">มหาสารคาม</FormOption>
                <FormOption value="มุกดาหาร">มุกดาหาร</FormOption>
                <FormOption value="ยะลา">ยะลา</FormOption>
                <FormOption value="ยโสธร">ยโสธร</FormOption>
                <FormOption value="ร้อยเอ็ด">ร้อยเอ็ด</FormOption>
                <FormOption value="ระนอง">ระนอง</FormOption>
                <FormOption value="ระยอง">ระยอง</FormOption>
                <FormOption value="ราชบุรี">ราชบุรี</FormOption>
                <FormOption value="ลพบุรี">ลพบุรี</FormOption>
                <FormOption value="ลำปาง">ลำปาง</FormOption>
                <FormOption value="ลำพูน">ลำพูน</FormOption>
                <FormOption value="ศรีสะเกษ">ศรีสะเกษ</FormOption>
                <FormOption value="สกลนคร">สกลนคร</FormOption>
                <FormOption value="สงขลา">สงขลา</FormOption>
                <FormOption value="สตูล">สตูล</FormOption>
                <FormOption value="สมุทรปราการ">สมุทรปราการ</FormOption>
                <FormOption value="สมุทรสงคราม">สมุทรสงคราม</FormOption>
                <FormOption value="สมุทรสาคร">สมุทรสาคร</FormOption>
                <FormOption value="สระบุรี">สระบุรี</FormOption>
                <FormOption value="สระแก้ว">สระแก้ว</FormOption>
                <FormOption value="สิงห์บุรี">สิงห์บุรี</FormOption>
                <FormOption value="สุพรรณบุรี">สุพรรณบุรี</FormOption>
                <FormOption value="สุราษฎร์ธานี">สุราษฎร์ธานี</FormOption>
                <FormOption value="สุรินทร์">สุรินทร์</FormOption>
                <FormOption value="สุโขทัย">สุโขทัย</FormOption>
                <FormOption value="หนองคาย">หนองคาย</FormOption>
                <FormOption value="หนองบัวลำภู">หนองบัวลำภู</FormOption>
                <FormOption value="อ่างทอง">อ่างทอง</FormOption>
                <FormOption value="อำนาจเจริญ">อำนาจเจริญ</FormOption>
                <FormOption value="อุดรธานี">อุดรธานี</FormOption>
                <FormOption value="อุตรดิตถ์">อุตรดิตถ์</FormOption>
                <FormOption value="อุทัยธานี">อุทัยธานี</FormOption>
                <FormOption value="อุบลราชธานี">อุบลราชธานี</FormOption>
                <FormOption value="เชียงราย">เชียงราย</FormOption>
                <FormOption value="เชียงใหม่">เชียงใหม่</FormOption>
                <FormOption value="เพชรบุรี">เพชรบุรี</FormOption>
                <FormOption value="เพชรบูรณ์">เพชรบูรณ์</FormOption>
                <FormOption value="เลย">เลย</FormOption>
                <FormOption value="แพร่">แพร่</FormOption>
                <FormOption value="แม่ฮ่องสอน">แม่ฮ่องสอน</FormOption>
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

export default HomeRefinancePage;
