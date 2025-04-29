import { Company } from "../../models/company.model";

export const companyStub = (): Partial<Company> => {
  return {
    id: 1,
    name: "MFaktor",
    phone: "+998test",
    email: "companiya@test.gmail.com",
    address: "test",
    createdAt: new Date(), // Majburiy maydonlar qo'shildi
    updatedAt: new Date(),
  };
};
