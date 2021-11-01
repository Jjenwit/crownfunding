import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const InfoContext = createContext({
  job: '',
  jobAge: '',
  income: '',
  limit: '',
  period: '',
  handleJobChange: (job: string) => {},
  handleJobAgeChange: (jobAge: string) => {},
  handleIncomeChange: (income: string) => {},
  handleLimitChange: (limit: string) => {},
  handlePeriodChange: (period: string) => {},
});

export function InfoContextProvider(props: Props) {
  const [job, setJob] = useState<string>('');
  const [jobAge, setJobAge] = useState<string>('');
  const [income, setIncome] = useState<string>('');
  const [limit, setLimit] = useState<string>('');
  const [period, setPeriod] = useState<string>('');

  const handleJobChange = (job: string) => {
    setJob(job);
  };

  const handleJobAgeChange = (jobAge: string) => {
    setJobAge(jobAge);
  };

  const handleIncomeChange = (income: string) => {
    setIncome(income);
  };

  const handleLimitChange = (limit: string) => {
    setLimit(limit);
  };

  const handlePeriodChange = (period: string) => {
    setPeriod(period);
  };

  const value = {
    job,
    jobAge,
    income,
    limit,
    period,
    handleJobChange,
    handleJobAgeChange,
    handleIncomeChange,
    handleLimitChange,
    handlePeriodChange,
  };

  return <InfoContext.Provider value={value} {...props} />;
}

export default InfoContext;
