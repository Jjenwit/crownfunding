import { useContext } from 'react';
import styled from 'styled-components';
import InfoContext from '../../contexts/InfoContext';
import { ILoan } from '../../interfaces';

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

  @media screen and (max-width: 750px) {
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
  flex-grow: 1;
  border-radius: 10px 10px 0px 0px;
  background-color: var(--orange);

  @media screen and (max-width: 900px) {
    font-size: 1.1em;
  }
`;

const Body = styled.div`
  display: flex;
  color: var(--darkBlue);
  flex-grow: 3;
  justify-content: space-around;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;

  @media screen and (max-width: 1000px) {
    width: 25%;
  }

  @media screen and (max-width: 750px) {
    width: 90%;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 2px solid var(--grey);
  }
`;

const ImageColumn = styled(Column)`
  width: 15%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 1000px) {
    width: 25%;
  }

  @media screen and (max-width: 750px) {
    width: 90%;
    padding: 20px;
    box-sizing: border-box;
    border-bottom: 2px solid var(--grey);
  }
`;

const Info = styled.div`
  font-size: 1.5em;

  @media screen and (max-width: 900px) {
    font-size: 1.2em;
  }
`;

const Label = styled.div`
  font-size: 0.9em;

  @media screen and (max-width: 900px) {
    font-size: 0.8em;
  }
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

  @media screen and (max-width: 900px) {
    font-size: 0.8em;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (max-width: 750px) {
    font-size: 1em;
    padding: 7px;
    padding-left: 20px;
    padding-right: 20px;
    width: 70%;
  }
`;

const LoanItem: React.FC<ILoan> = (props) => {
  const { name, interest, image } = props;

  const infoContext = useContext(InfoContext);
  const limit = parseInt(infoContext.limit);
  const period = parseInt(infoContext.period);

  const rate = interest / 12;
  const monthlyValue = Math.round(
    (limit * (rate * (1 + rate) ** period)) / ((1 + rate) ** period - 1)
  );
  const totalValue = monthlyValue * period;

  const {
    handleMonthlyValueChange,
    handleInterestChange,
    handleTotalValueChange,
  } = infoContext;

  const history = useHistory();

  const onSubmit = () => {
    handleMonthlyValueChange(monthlyValue.toString());
    handleInterestChange(interest.toString());
    handleTotalValueChange(totalValue.toString());
    history.push('/adjust');
  };

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
          <Button onClick={onSubmit}>ลงทะเบียน</Button>
        </ImageColumn>
      </Body>
    </Container>
  );
};

export default LoanItem;
