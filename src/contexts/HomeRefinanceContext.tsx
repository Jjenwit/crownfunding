import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const HomeRefinanceContext = createContext({
  price: '',
  debt: '',
  monthlyValue: '',
  period: '',
  income: '',
  bank: '',
  job: '',
  residence: '',
  province: '',
  handlePriceChange: (price: string) => {},
  handleDebtChange: (debt: string) => {},
  handleMonthlyValueChange: (monthlyValue: string) => {},
  handlePeriodChange: (period: string) => {},
  handleIncomeChange: (income: string) => {},
  handleBankChange: (bank: string) => {},
  handleJobChange: (job: string) => {},
  handleResidenceChange: (residence: string) => {},
  handleProvinceChange: (province: string) => {},
});

export function HomeRefinanceContextProvider(props: Props) {
  const [price, setPrice] = useState<string>('');
  const [debt, setDebt] = useState<string>('');
  const [monthlyValue, setMonthlyValue] = useState<string>('');
  const [period, setPeriod] = useState<string>('');
  const [income, setIncome] = useState<string>('');
  const [bank, setBank] = useState<string>('');

  const [job, setJob] = useState<string>('');
  const [residence, setResidence] = useState<string>('');
  const [province, setProvince] = useState<string>('');

  const handlePriceChange = (price: string) => {
    setPrice(price);
  };

  const handleDebtChange = (debt: string) => {
    setDebt(debt);
  };

  const handleMonthlyValueChange = (monthlyValue: string) => {
    setMonthlyValue(monthlyValue);
  };

  const handlePeriodChange = (period: string) => {
    setPeriod(period);
  };

  const handleIncomeChange = (income: string) => {
    setIncome(income);
  };

  const handleBankChange = (bank: string) => {
    setBank(bank);
  };

  const handleJobChange = (job: string) => {
    setJob(job);
  };

  const handleResidenceChange = (residence: string) => {
    setResidence(residence);
  };

  const handleProvinceChange = (province: string) => {
    setProvince(province);
  };

  const value = {
    price,
    debt,
    monthlyValue,
    period,
    income,
    bank,
    job,
    residence,
    province,
    handlePriceChange,
    handleDebtChange,
    handleMonthlyValueChange,
    handlePeriodChange,
    handleIncomeChange,
    handleBankChange,
    handleJobChange,
    handleResidenceChange,
    handleProvinceChange,
  };

  return <HomeRefinanceContext.Provider value={value} {...props} />;
}

export default HomeRefinanceContext;
