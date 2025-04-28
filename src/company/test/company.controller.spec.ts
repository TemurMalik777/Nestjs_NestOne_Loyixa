import { Test } from "@nestjs/testing";
import { CompanyController } from "../company.controller";
import { CompanyService } from "../company.service";
import { JwtService } from "@nestjs/jwt";
import { Company } from "../models/company.model";
import { CreateCompanyDto } from "../dto/create-company.dto";
import { companyStub } from "./stubs/company.stubs";

jest.mock("../company.service");

describe("Users controller testing", () => {
  let companyController: CompanyController;
  let companyService: CompanyService;

  beforeAll(async () => {
    const modulRefCom = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [CompanyService, JwtService],
    }).compile();

    companyController = modulRefCom.get<CompanyController>(CompanyController);
    companyService = modulRefCom.get<CompanyService>(CompanyService);
    jest.clearAllMocks();
  });

  it("Company controller should be defined", () => {
    expect(companyController).toBeDefined();
  });

  test("Company service should be defined ", () => {
    expect(companyService).toBeDefined();
  });

  describe("create Company testing", () => {
    describe("when create company", () => {
      let company: Company;
      let createCompanyDto: CreateCompanyDto;
      beforeAll(async () => {
        createCompanyDto = {
          name: companyStub().name!,
          phone: companyStub().phone!,
          email: companyStub().email!,
          address: companyStub().address!,
        };
        company = await companyController.createCompany(createCompanyDto);
      });

      it("then it shuld call companyService", () => {
        expect(companyService.createCompany).toHaveBeenCalledWith(
          createCompanyDto
        );
      });

      it("then it should return company", () => {
        expect(company).toEqual(companyStub());
      });
    });
  });

  describe("findAll company", () => {
    describe("when findAll company called", ()=>{
        let company: Company[]
        beforeAll(async ()=>{
            company = await companyController.findAllCompanies()
            console.log(company);
        })

        it("then it should call company", () =>{
            expect(companyService.findAllCompanies).toHaveBeenCalled()
        })

        test("then it should rutrun users", () => {
            expect(company).toEqual([companyStub])
        })
    })

    describe("findOne company", () => {
        describe("when findOne company called", ()=>{
            let company: Company | null
            let id: number
            beforeAll(async ()=>{
                id = companyStub().id as number
                company = await companyController.findOneCompanies(id)
                console.log(company);
            })
    
            it("then it should call companySerivice", () =>{
                expect(companyService.findOneCompanies).toHaveBeenCalled(id)
            })
    
            test("then it should rutrun company", () => {
                expect(company).toEqual([companyStub])
            })
        })
  })
})
})