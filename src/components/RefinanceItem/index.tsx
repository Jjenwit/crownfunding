import styled from 'styled-components';
import { IRefinance } from '../../interfaces';

import { useHistory } from 'react-router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 0px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 5px 5px 10px;
  background-color: var(--white);

  @media screen and (max-width: 1100px) {
    height: auto;
  }
`;

const Header = styled.div`
  font-size: 1.2em;
  color: var(--darkBlue);
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  flex-grow: 2;
  border-radius: 10px 10px 0px 0px;
  background-color: var(--orange);
`;

const Body = styled.div`
  display: flex;
  color: var(--darkBlue);
  flex-grow: 3;
  padding: 20px;
  justify-content: space-around;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  align-items: center;
  border-right: 2px solid var(--grey);
  padding-right: 30px;
  box-sizing: border-box;

  @media screen and (max-width: 1300px) {
    width: 30%;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 20px;
    border-right: none;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 2px solid var(--grey);
  }
`;

const MiddleColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  box-sizing: border-box;

  @media screen and (max-width: 1300px) {
    width: 30%;
  }

  @media screen and (max-width: 1200px) {
    width: 35%;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 20px;
    border-right: none;
    margin-left: auto;
    margin-right: auto;
    border-bottom: 2px solid var(--grey);
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15%;
  box-sizing: border-box;

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 20px;
    padding-top: 40px;
    border-right: none;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const Info = styled.div`
  font-size: 1.5em;
`;

const Label = styled.div`
  font-size: 0.9em;
`;

const Button = styled.button`
  font-family: 'Kanit';
  font-size: 1em;
  width: 100%;
  color: white;
  padding: 7px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--orange);
  &:active {
    background-color: var(--darkOrange);
  }
`;

const Orange = styled.span`
  color: var(--orange);
`;

const RefinanceItem: React.FC<IRefinance> = (props) => {
  const { interest, discount, monthlyValue, fees } = props;

  const history = useHistory();

  const onSubmit = () => {
    history.push('/confirmation');
  };

  return (
    <Container>
      <Header></Header>
      <Body>
        <LeftColumn>
          <Info>
            ดอกเบี้ยสามปีเเรก
            <Orange>{' ' + (interest * 100).toFixed(2)}%</Orange>
          </Info>
          <Label>
            ประหยัดดอกเบี้ยสามปีเเรกถึง
            <Orange>{' ' + discount.toLocaleString() + ' '}</Orange>
            บาท
          </Label>
        </LeftColumn>
        <MiddleColumn>
          <Detail>
            <div>กู้เพิ่มได้สูงสุด</div>
            <div>ไม่มีวงเงินกู้เพิ่ม</div>
          </Detail>
          <Detail>
            <div>ประกันชีวิต (MRTA)</div>
            <div>ต้องทำ</div>
          </Detail>
          <Detail>
            <div>ผ่อนต่อเดือน</div>
            <div>
              <Orange>{monthlyValue + ' '}</Orange>
              บาท
            </div>
          </Detail>
          <Detail>
            <div>ค่าใช้จ่าย</div>
            <div>{fees} บาท</div>
          </Detail>
        </MiddleColumn>
        <RightColumn>
          <Button onClick={onSubmit}>ลงทะเบียน</Button>
        </RightColumn>
      </Body>
    </Container>
  );
};

export default RefinanceItem;
