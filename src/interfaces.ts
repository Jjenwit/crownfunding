export interface Loan {
  name: string;
  interest: number;
  image: string;
  qualifications: { name: string; value: string }[];
  fees: { name: string; value: string }[];
}
