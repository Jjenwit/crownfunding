import { loanList } from '../../constant';
import Navbar from '../../components/Navbar';
import LoanItem from '../../components/LoanItem';
import InfoSetting from '../../components/InfoSetting';

import styled from 'styled-components';

const Header = styled.div`
  font-size: 3em;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 250px;
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    font-size: 2.5em;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 900px) {
    font-size: 2em;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (max-width: 620px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 460px) {
    font-size: 1.3em;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const ItemContainer = styled.div`
  width: 75%;

  @media screen and (max-width: 1300px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const InfoContainer = styled.div`
  width: 20%;

  @media screen and (max-width: 1300px) {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
  }
`;

const ItemWrapper = styled.div`
  margin-bottom: 25px;
`;

const LoanResultsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header>ผลลัพธ์การค้นหาสินเชื่อที่เหมาะกับคุณ!</Header>
      <Container>
        <InfoContainer>
          <InfoSetting />
        </InfoContainer>
        <ItemContainer>
          {loanList.map((loan) => (
            <ItemWrapper key={loan.name}>
              <LoanItem {...loan} />
            </ItemWrapper>
          ))}
        </ItemContainer>
      </Container>
    </>
  );
};

export default LoanResultsPage;
