import { Delete, Injectable, Query } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Company } from "./models/company.model";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { CompanyQueryDto } from "./dto/query-company.dto";
import { Op } from "sequelize";

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company) private companyModule: typeof Company) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    // return this.companyModul.create(createCompanyDto)
    const company = await this.companyModule.create(createCompanyDto);
    return company;
  }

  async findAllCompanies(): Promise<Company[]> {
    return this.companyModule.findAll();
  }

  async findOneCompanies(id: number): Promise<Company | null> {
    return this.companyModule.findByPk(id);
  }

  async updateCompanyDto(
    id: number,
    updateCompanyDto: UpdateCompanyDto
  ): Promise<Company | null> {
    const updatedCompany = await this.companyModule.update(updateCompanyDto,
        {where: {id}, returning: true}
    );

    return updatedCompany[1][0]
  }

  async deleteCompany(id: number){
    const deleteCompany = await this.companyModule.destroy({where: {id}})
    if (deleteCompany>0) {
        return "Companiya O'chirildi"
    }
    return "Bunday companiya mavjud emas"
  }

  async findByName(name: string) {
    return this.companyModule.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
  
}
}