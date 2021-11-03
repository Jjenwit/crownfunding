import { createContext, useState } from 'react';
import { Finance } from 'financejs';
interface Props {
  children: React.ReactNode;
}

const InfoContext = createContext({
  job: '',
  jobAge: '',
  income: '',
  limit: '',
  period: '',
  monthlyValue: '',
  interest: '',
  totalValue: '',
  handleJobChange: (job: string) => {},
  handleJobAgeChange: (jobAge: string) => {},
  handleIncomeChange: (income: string) => {},
  handleLimitChange: (limit: string) => {},
  handlePeriodChange: (period: string) => {},
  handleMonthlyValueChange: (monthlyValue: string) => {},
  handleInterestChange: (interest: string) => {},
  handleTotalValueChange: (totalValue: string) => {},
  calculateLoan: () => {},
});

export function InfoContextProvider(props: Props) {
  const [job, setJob] = useState<string>('');
  const [jobAge, setJobAge] = useState<string>('');
  const [income, setIncome] = useState<string>('');
  const [limit, setLimit] = useState<string>('');
  const [period, setPeriod] = useState<string>('');

  const [monthlyValue, setMonthlyValue] = useState<string>('');
  const [interest, setInterest] = useState<string>('');
  const [totalValue, setTotalValue] = useState<string>('');

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

  const handleMonthlyValueChange = (monthlyValue: string) => {
    const finance = new Finance();
    const totalValue = parseInt(monthlyValue) * parseInt(period);
    let irr = '';

    try {
      irr = finance
        .IRR(
          -parseInt(limit),
          ...Array(parseInt(period)).fill(parseInt(monthlyValue))
        )
        .toString();
    } catch {}

    irr = ((parseFloat(irr) * 12) / 100).toString();

    setMonthlyValue(monthlyValue);
    setInterest(irr || interest);
    setTotalValue(totalValue.toString());
  };

  const handleInterestChange = (interest: string) => {
    const rate = parseFloat(interest) / 12;
    const monthlyValue = Math.round(
      (parseInt(limit) * (rate * (1 + rate) ** parseInt(period))) /
        ((1 + rate) ** parseInt(period) - 1)
    );
    const totalValue = monthlyValue * parseInt(period);

    setMonthlyValue(monthlyValue.toString());
    setInterest(interest);
    setTotalValue(totalValue.toString());
  };

  const handleTotalValueChange = (totalValue: string) => {
    const finance = new Finance();
    const monthlyValue = parseInt(totalValue) / parseInt(period);
    let irr = '';

    try {
      irr = finance
        .IRR(-parseInt(limit), ...Array(parseInt(period)).fill(monthlyValue))
        .toString();
    } catch {}

    irr = ((parseFloat(irr) * 12) / 100).toString();

    setMonthlyValue(monthlyValue.toString());
    setInterest(irr || interest.toString());
    setTotalValue(totalValue);
  };

  const calculateLoan = () => {
    const lowestInterest = 0.09;

    const upperLimit =
      Math.round(
        (parseInt(income) *
          parseFloat(job) *
          parseFloat(jobAge) *
          0.3 *
          parseInt(period) *
          3) /
          1000
      ) * 1000;

    if (parseInt(limit) > upperLimit) {
      if (parseFloat(interest) < lowestInterest) {
        const rate = lowestInterest / 12;
        const monthlyValue = Math.round(
          (upperLimit * (rate * (1 + rate) ** parseInt(period))) /
            ((1 + rate) ** parseInt(period) - 1)
        );
        const totalValue = monthlyValue * parseInt(period);

        setMonthlyValue(monthlyValue.toString());
        setInterest(lowestInterest.toString());
        setTotalValue(totalValue.toString());
        setLimit(upperLimit.toString());
      } else {
        const rate = parseFloat(interest) / 12;
        const monthlyValue = Math.round(
          (upperLimit * (rate * (1 + rate) ** parseInt(period))) /
            ((1 + rate) ** parseInt(period) - 1)
        );
        const totalValue = monthlyValue * parseInt(period);

        setMonthlyValue(monthlyValue.toString());
        setInterest(interest);
        setTotalValue(totalValue.toString());
        setLimit(upperLimit.toString());
      }
    } else {
      if (parseFloat(interest) < lowestInterest) {
        const rate = lowestInterest / 12;
        const monthlyValue = Math.round(
          (parseInt(limit) * (rate * (1 + rate) ** parseInt(period))) /
            ((1 + rate) ** parseInt(period) - 1)
        );
        const totalValue = monthlyValue * parseInt(period);

        setMonthlyValue(monthlyValue.toString());
        setInterest(lowestInterest.toString());
        setTotalValue(totalValue.toString());
      } else {
        const rate = parseFloat(interest) / 12;
        const monthlyValue = Math.round(
          (parseInt(limit) * (rate * (1 + rate) ** parseInt(period))) /
            ((1 + rate) ** parseInt(period) - 1)
        );
        const totalValue = monthlyValue * parseInt(period);

        setMonthlyValue(monthlyValue.toString());
        setInterest(interest);
        setTotalValue(totalValue.toString());
      }
    }
  };

  const value = {
    job,
    jobAge,
    income,
    limit,
    period,
    monthlyValue,
    interest,
    totalValue,
    handleJobChange,
    handleJobAgeChange,
    handleIncomeChange,
    handleLimitChange,
    handlePeriodChange,
    handleMonthlyValueChange,
    handleInterestChange,
    handleTotalValueChange,
    calculateLoan,
  };

  return <InfoContext.Provider value={value} {...props} />;
}

export default InfoContext;
