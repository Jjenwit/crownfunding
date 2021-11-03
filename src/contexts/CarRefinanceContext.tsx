import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const CarRefinanceContext = createContext({
  price: '',
  debt: '',
  monthlyValue: '',
  period: '',
  income: '',
  bank: '',
  job: '',
  residence: '',
  brand: '',
  model: '',
  year: '',
  handlePriceChange: (price: string) => {},
  handleDebtChange: (debt: string) => {},
  handleMonthlyValueChange: (monthlyValue: string) => {},
  handlePeriodChange: (period: string) => {},
  handleIncomeChange: (income: string) => {},
  handleBankChange: (bank: string) => {},
  handleJobChange: (job: string) => {},
  handleResidenceChange: (residence: string) => {},
  handleBrandChange: (brand: string) => {},
  handleModelChange: (model: string) => {},
  handleYearChange: (year: string) => {},
});

export function CarRefinanceContextProvider(props: Props) {
  const [price, setPrice] = useState<string>('');
  const [debt, setDebt] = useState<string>('');
  const [monthlyValue, setMonthlyValue] = useState<string>('');
  const [period, setPeriod] = useState<string>('');
  const [income, setIncome] = useState<string>('');
  const [bank, setBank] = useState<string>('');

  const [job, setJob] = useState<string>('');
  const [residence, setResidence] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [year, setYear] = useState<string>('');

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

  const handleBrandChange = (brand: string) => {
    setBrand(brand);
  };

  const handleModelChange = (model: string) => {
    setModel(model);
  };

  const handleYearChange = (year: string) => {
    setYear(year);
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
    brand,
    model,
    year,
    handlePriceChange,
    handleDebtChange,
    handleMonthlyValueChange,
    handlePeriodChange,
    handleIncomeChange,
    handleBankChange,
    handleJobChange,
    handleResidenceChange,
    handleBrandChange,
    handleModelChange,
    handleYearChange,
  };

  return <CarRefinanceContext.Provider value={value} {...props} />;
}

export default CarRefinanceContext;
