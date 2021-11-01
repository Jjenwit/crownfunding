import loanList from '../../constant';
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
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ItemContainer = styled.div`
  width: 70%;
`;

const InfoContainer = styled.div`
  width: 20%;
`;

const ItemWrapper = styled.div`
  margin-bottom: 25px;
`;

const ResultsPage: React.FC = () => {
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

export default ResultsPage;
