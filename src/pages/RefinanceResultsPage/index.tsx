import { refinanceList } from '../../constant';
import Navbar from '../../components/Navbar';
import RefinanceItem from '../../components/RefinanceItem';

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

  @media screen and (max-width: 800px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 700px) {
    font-size: 2em;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.6em;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ItemContainer = styled.div`
  width: 70%;

  @media screen and (max-width: 1300px) {
    width: 85%;
  }
`;

const ItemWrapper = styled.div`
  margin-bottom: 25px;
`;

const RefinanceResultsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header>ผลลัพธ์การค้นหาสินเชื่อที่เหมาะกับคุณ!</Header>
      <Container>
        <ItemContainer>
          {refinanceList.map((refinance) => (
            <ItemWrapper key={refinance.id}>
              <RefinanceItem {...refinance} />
            </ItemWrapper>
          ))}
        </ItemContainer>
      </Container>
    </>
  );
};

export default RefinanceResultsPage;
