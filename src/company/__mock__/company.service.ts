import { companyStub } from "../test/stubs/company.stubs";



export const CompanyService = jest.fn().mockReturnValue({
    createCompany: jest.fn().mockResolvedValue(companyStub()),
    findAll: jest.fn().mockResolvedValue([companyStub()]),
    findOne: jest.fn().mockResolvedValue(companyStub())
    // remove: jest.fn().mockReturnValue({message: `Foydalanuvchi o'chirildi`})
})