import { companyStub } from "../test/stubs/company.stubs";

export const CompanyServiceMock = {
  createCompany: jest.fn().mockResolvedValue(companyStub()), // create o'rniga createCompany
  findAllCompanies: jest.fn().mockResolvedValue([companyStub()]), // findAll o'rniga findAllCompanies
  findOne: jest.fn().mockResolvedValue(companyStub()),
  update: jest.fn().mockResolvedValue(companyStub()),
  remove: jest.fn().mockResolvedValue({
    success: true,
    message: "Kompaniya muvaffaqiyatli o'chirildi",
  }),
};
