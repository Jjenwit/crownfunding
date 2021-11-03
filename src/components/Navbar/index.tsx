import styled from 'styled-components';
import { useHistory } from 'react-router';

const Container = styled.div`
  color: var(--white);
  font-size: 2em;
  background-color: var(--darkBlue);
  height: 10vh;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (max-width: 1000px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.3em;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.2em;
  }
`;

const Home = styled.div``;

const Navbar: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <Home onClick={() => history.push('/')}>Crownfunding.th</Home>
    </Container>
  );
};

export default Navbar;
