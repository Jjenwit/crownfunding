import { ILoan, IRefinance } from './interfaces';

export const loanList: ILoan[] = [
  {
    name: 'สินเชื่อบุคคลเพอร์ซันนัลแคช',
    interest: 0.09,
    image:
      'https://images.contentstack.io/v3/assets/blt982569777f218b66/blt66504f63e9bf24ca/5ec7c1cb98f79d6925dbeb20/cimb_thai.png?auto=webp&height=80',
    qualifications: [
      {
        name: 'เกณฑ์อายุขั้นต่ำ',
        value: '21 ปี',
      },
      {
        name: 'เกณฑ์อายุสูงสุด',
        value: '59 ปี',
      },
      {
        name: 'รายได้ต่อเดือนขั้นต่ำ',
        value: '30,000 บาท',
      },
    ],
    fees: [
      {
        name: 'ค่าอากรแสตมป์',
        value: '500 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการตรวจสอบข้อมูลเครดิต',
        value: '0 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการติดตามทวงถามหนี้',
        value: '0 บาท',
      },
    ],
  },
  {
    name: 'สินเชื่อบุคคลซิตี้',
    interest: 0.1399,
    image:
      'https://images.contentstack.io/v3/assets/blt982569777f218b66/bltbc712f263d912d39/5c92f783e71fdc123a20448a/Citi.png?auto=webp&height=80',
    qualifications: [
      {
        name: 'เกณฑ์อายุขั้นต่ำ',
        value: '21 ปี',
      },
      {
        name: 'เกณฑ์อายุสูงสุด',
        value: '60 ปี',
      },
      {
        name: 'รายได้ต่อเดือนขั้นต่ำ',
        value: '20,000 บาท',
      },
      {
        name: 'ระยะเวลาผ่อนต่ำสุด',
        value: '12 เดือน',
      },
      {
        name: 'ระยะเวลาผ่อนสูงสุด',
        value: '60 เดือน',
      },
    ],
    fees: [
      {
        name: 'ค่าอากรแสตมป์',
        value: '500 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการตรวจสอบข้อมูลเครดิต',
        value: '12 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการติดตามทวงถามหนี้',
        value: '50 บาท',
      },
    ],
  },
  {
    name: 'สินเชื่อบุคคล ทีทีบี แคชทูโก',
    interest: 0.17,
    image:
      'https://images.contentstack.io/v3/assets/blt982569777f218b66/blt0506fd5d5286219f/60b7bd39069dc90a315f7c25/TTB_bank.png?auto=webp&height=80',
    qualifications: [
      {
        name: 'เกณฑ์อายุขั้นต่ำ',
        value: '20 ปี',
      },
      {
        name: 'เกณฑ์อายุสูงสุด',
        value: '59 ปี',
      },
      {
        name: 'รายได้ต่อเดือนขั้นต่ำ',
        value: '15,000 บาท',
      },
    ],
    fees: [
      {
        name: 'ค่าอากรแสตมป์',
        value: '0 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการตรวจสอบข้อมูลเครดิต',
        value: '0 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการติดตามทวงถามหนี้',
        value: '50 บาท',
      },
    ],
  },
  {
    name: 'ยูโอบี ไอ - แคช',
    interest: 0.1899,
    image:
      'https://images.contentstack.io/v3/assets/blt982569777f218b66/blt941876bc386714a4/5cee5186ea630d2b1f37167f/UOB_Logo4.png?auto=webp&height=80',
    qualifications: [
      {
        name: 'เกณฑ์อายุขั้นต่ำ',
        value: '20 ปี',
      },
      {
        name: 'เกณฑ์อายุสูงสุด',
        value: '60 ปี',
      },
      {
        name: 'รายได้ต่อเดือนขั้นต่ำ',
        value: '15,000 บาท',
      },
      {
        name: 'ระยะเวลาผ่อนต่ำสุด',
        value: '12 เดือน',
      },
      {
        name: 'ระยะเวลาผ่อนสูงสุด',
        value: '60 เดือน',
      },
    ],
    fees: [
      {
        name: 'ค่าอากรแสตมป์',
        value: '500 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการตรวจสอบข้อมูลเครดิต',
        value: '0 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการติดตามทวงถามหนี้',
        value: '50 บาท',
      },
      {
        name: 'ระยะเวลาอนุมัติ',
        value: '3 วัน',
      },
    ],
  },
  {
    name: 'สินเชื่อเงินด่วน Xpress Loan',
    interest: 0.19,
    image:
      'https://images.contentstack.io/v3/assets/blt982569777f218b66/blt2f713a71a7b9db14/5c92f500d17715ce39243834/logo%20Kasikorn.png?auto=webp&height=80',
    qualifications: [
      {
        name: 'เกณฑ์อายุขั้นต่ำ',
        value: '20 ปี',
      },
      {
        name: 'เกณฑ์อายุสูงสุด',
        value: '59 ปี',
      },
      {
        name: 'รายได้ต่อเดือนขั้นต่ำ',
        value: '15,000 บาท',
      },
    ],
    fees: [
      {
        name: 'ค่าอากรแสตมป์',
        value: '0 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการตรวจสอบข้อมูลเครดิต',
        value: '0 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการติดตามทวงถามหนี้',
        value: '50 บาท',
      },
    ],
  },

  {
    name: 'บัตรกดเงินสด เคทีซี พราว',
    interest: 0.1999,
    image:
      'https://images.contentstack.io/v3/assets/blt982569777f218b66/blt2c1f9a0885e6cc86/6113793c3ea66f3ecbdbfdc3/KTC_cashcard2021.png?auto=webp&height=80',
    qualifications: [
      {
        name: 'เกณฑ์อายุขั้นต่ำ',
        value: '20 ปี',
      },
      {
        name: 'เกณฑ์อายุสูงสุด',
        value: '59 ปี',
      },
      {
        name: 'รายได้ต่อเดือนขั้นต่ำ',
        value: '15,000 บาท',
      },
    ],
    fees: [
      {
        name: 'ค่าอากรแสตมป์',
        value: '0 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการตรวจสอบข้อมูลเครดิต',
        value: '0 บาท',
      },
      {
        name: 'ค่าใช้จ่ายในการติดตามทวงถามหนี้',
        value: '50 บาท',
      },
    ],
  },
];

export const refinanceList: IRefinance[] = [
  {
    id: 1,
    interest: 0.0289,
    discount: 49100,
    monthlyValue: 6100,
    fees: 13700,
  },
  {
    id: 2,
    interest: 0.0295,
    discount: 67900,
    monthlyValue: 7000,
    fees: 13500,
  },
  {
    id: 3,
    interest: 0.03,
    discount: 52700,
    monthlyValue: 7000,
    fees: 1000,
  },
  {
    id: 4,
    interest: 0.033,
    discount: 42000,
    monthlyValue: 7500,
    fees: 500,
  },
  {
    id: 5,
    interest: 0.035,
    discount: 28000,
    monthlyValue: 7500,
    fees: 5000,
  },
];
