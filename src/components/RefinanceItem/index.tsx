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
            ???????????????????????????????????????????????????
            <Orange>{' ' + (interest * 100).toFixed(2)}%</Orange>
          </Info>
          <Label>
            ?????????????????????????????????????????????????????????????????????????????????
            <Orange>{' ' + discount.toLocaleString() + ' '}</Orange>
            ?????????
          </Label>
        </LeftColumn>
        <MiddleColumn>
          <Detail>
            <div>???????????????????????????????????????????????????</div>
            <div>?????????????????????????????????????????????????????????</div>
          </Detail>
          <Detail>
            <div>????????????????????????????????? (MRTA)</div>
            <div>??????????????????</div>
          </Detail>
          <Detail>
            <div>????????????????????????????????????</div>
            <div>
              <Orange>{monthlyValue + ' '}</Orange>
              ?????????
            </div>
          </Detail>
          <Detail>
            <div>??????????????????????????????</div>
            <div>{fees} ?????????</div>
          </Detail>
        </MiddleColumn>
        <RightColumn>
          <Button onClick={onSubmit}>???????????????????????????</Button>
        </RightColumn>
      </Body>
    </Container>
  );
};

export default RefinanceItem;
