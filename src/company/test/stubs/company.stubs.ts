import { Company } from "../../models/company.model";

export const companyStub = (): Partial<Company> => {
  return {
    name: "MFaktor",
    phone: "+998test",
    email: "companiya@test.gmail.com",
    address: "test",
  };
};
