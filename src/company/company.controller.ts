import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
    constructor(private readonly companySevice: CompanyService){
    }

    @Post()
    async createCompany(@Body() createCompanyDto: CreateCompanyDto): Promise<Company>{
        return this.companySevice.createCompany(createCompanyDto)
    }

    @Get()
    async findAllCompanies(){
        return this.companySevice.findAllCompanies()
    }

    @Get(":id")
    async findOneCompanies(@Param("id") id:string){
        return this.companySevice.findOneCompanies(+id)
    }

    @Put(":id")
    async updateCompany(@Param("id") id:string, @Body()updateCompanyDto: UpdateCompanyDto){
        return this.companySevice.updateCompanyDto(+id, updateCompanyDto)
    }

    @Delete(":id")
    async deleteCompany(@Param("id") id:string){
        return this.companySevice.deleteCompany(+id)
    }

    @Get()
    getCompanyByQuery(@Query('name') name: string) {
      return {
        message: `Company: ${name}`,
      };
    }
    
}
