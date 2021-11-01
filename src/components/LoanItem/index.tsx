import { useContext } from 'react';
import styled from 'styled-components';
import InfoContext from '../../contexts/InfoContext';
import { Loan } from '../../interfaces';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  padding: 0px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 5px 5px 10px;
  background-color: var(--white);
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
  flex-grow: 1;
  border-radius: 10px 10px 0px 0px;
  background-color: var(--orange);
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--darkBlue);
  display: flex;
  flex-grow: 3;
  justify-content: space-around;
`;

const Column = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const ImageColumn = styled(Column)`
  width: 15%;
`;

const Info = styled.div`
  font-size: 1.5em;
`;

const Label = styled.div`
  font-size: 0.9em;
`;

const Image = styled.img`
  max-height: 35%;
  max-width: 100%;
  margin-bottom: 20px;
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

const LoanItem: React.FC<Loan> = (props) => {
  const { name, interest, image } = props;

  const infoContext = useContext(InfoContext);
  const limit = parseInt(infoContext.limit);
  const period = parseInt(infoContext.period);

  const rate = interest / 12;
  const monthlyValue = Math.round(
    (limit * (rate * (1 + rate) ** period)) / ((1 + rate) ** period - 1)
  );
  const totalValue = monthlyValue * period;

  return (
    <Container>
      <Header>{name}</Header>
      <Body>
        <Column>
          <Info>{totalValue.toLocaleString()} บาท</Info>
          <Label>ยอดชำระรวมพร้อมดอกเบี้ย</Label>
        </Column>
        <Column>
          <Info>{monthlyValue.toLocaleString()} บาท</Info>
          <Label>ยอดผ่อนชำระต่อเดือน</Label>
        </Column>
        <Column>
          <Info>{(interest * 100).toFixed(2)}%</Info>
          <Label>อัตราดอกเบี้ย(ต่อปี)</Label>
        </Column>
        <ImageColumn>
          <Image src={image} alt="" />
          <Button>ลงทะเบียน</Button>
        </ImageColumn>
      </Body>
    </Container>
  );
};

export default LoanItem;
