export interface ILoan {
  name: string;
  interest: number;
  image: string;
  qualifications: { name: string; value: string }[];
  fees: { name: string; value: string }[];
}
export interface IRefinance {
  id: number;
  interest: number;
  discount: number;
  monthlyValue: number;
  fees: number;
}
