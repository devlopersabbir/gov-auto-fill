type Suffix = "I" | "II" | "III" | "IV" | "V" | "Jr." | "Sr.";
type AboutMe = {
  firstName: string;
  middleName: string;
  lastName: string;
  suffix: Suffix;
  dateOfBirth: string;
  ssn: boolean | string;
};

type MyHouseHold = {
  totalChild: number;
};

type TInputs = Partial<AboutMe> & Partial<MyHouseHold>;
