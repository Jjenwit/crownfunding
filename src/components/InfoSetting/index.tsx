import { useContext } from 'react';
import InfoContext from '../../contexts/InfoContext';

import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 10px;
`;
const Header = styled.div`
  font-size: 1.3em;
  color: var(--darkBlue);
  padding: 15px;
  border-bottom: 1px solid var(--grey);
`;

const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding: 15px;
  align-items: center;
  border-bottom: 1px solid var(--grey);
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding: 15px;
  align-items: center;
`;

const Range = styled.input`
  width: 80%;
`;

const RangeNumber = styled.div`
  font-size: 1em;
`;

const Label = styled.label`
  align-self: flex-start;
  font-size: 1em;
  margin-bottom: 5px;
`;

const Dropdown = styled.select`
  font-family: 'Kanit', sans-serif;
  font-size: 1em;
  width: 80%;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  border: 2px solid var(--darkBlue);
  cursor: pointer;
  &:focus {
    outline: 2px solid var(--orange);
  }
`;

const Option = styled.option`
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

const InfoSetting: React.FC = () => {
  const infoContext = useContext(InfoContext);
  const { limit, period, handleLimitChange, handlePeriodChange } = infoContext;

  return (
    <Container>
      <Header>เกี่ยวกับสินเชื่อ</Header>
      <RangeWrapper>
        <Label htmlFor="limit">จำนวนเงินกู้</Label>
        <Range
          type="range"
          id="limit"
          max={5000000}
          min={1000}
          step={1000}
          value={limit}
          onChange={(e) => {
            handleLimitChange(e.target.value);
          }}
        />
        <RangeNumber>
          {limit ? parseInt(limit).toLocaleString() + ' บาท' : '-'}
        </RangeNumber>
      </RangeWrapper>
      <DropdownWrapper>
        <Label htmlFor="period">ระยะเวลาสินเชื่อ</Label>
        <Dropdown
          defaultValue={period}
          onChange={(e) => {
            handlePeriodChange(e.target.value);
          }}
          id="period"
        >
          <Option value="" disabled>
            กรุณาเลือกจาก
          </Option>
          <Option value="12">12 เดือน</Option>
          <Option value="18">18 เดือน</Option>
          <Option value="24">24 เดือน</Option>
          <Option value="30">30 เดือน</Option>
          <Option value="36">36 เดือน</Option>
          <Option value="48">48 เดือน</Option>
          <Option value="60">60 เดือน</Option>
        </Dropdown>
      </DropdownWrapper>
    </Container>
  );
};

export default InfoSetting;
