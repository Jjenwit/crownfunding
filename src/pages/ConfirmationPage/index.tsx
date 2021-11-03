import Navbar from '../../components/Navbar';

import styled from 'styled-components';

import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const Container = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(IoMdCheckmarkCircleOutline)`
  height: auto;
  width: 20%;
  color: var(--orange);
`;

const Subtitle = styled.div`
  font-size: 3.5em;
  color: white;
  margin-bottom: 100px;
`;

const ConfirmationPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Icon />
        <Subtitle>สินเชื่อสำเร็จ!</Subtitle>
      </Container>
    </>
  );
};

export default ConfirmationPage;
