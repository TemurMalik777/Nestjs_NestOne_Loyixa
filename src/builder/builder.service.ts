import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Builder } from "./models/builder.model";
import { CreateBuilderDto } from "./dto/create-builder.dto";
import { UpdateBuilderDto } from "./dto/update-builder.dto";
import { CompanyService } from "../company/company.service";

@Injectable()
export class BuilderService {
  constructor(
    @InjectModel(Builder) private builderModule: typeof Builder,
    private readonly companyService: CompanyService
  ) {}

  async create(createBuilderDto: CreateBuilderDto) {
    const { companyId } = createBuilderDto;
    const company = await this.companyService.findOneCompanies(companyId);
    if (!company) {
      throw new BadRequestException("Bunday kompaniya mavjdu emas");
    }
    return this.builderModule.create(createBuilderDto);
  }

  findAll() {
    return this.builderModule.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const builder = await this.builderModule.findByPk(id, {
      include: { all: true },
    });
    if (!builder) {
      throw new NotFoundException("Builder not found");
    }
    return builder;
  }

  // Update by ID
  async update(id: number, updateBuilderDto: UpdateBuilderDto) {
    const builder = await this.findOne(id);
    return builder.update(updateBuilderDto);
  }

  // Delete by ID
  async remove(id: number) {
    const builder = await this.findOne(id);
    await builder.destroy();
    return { message: "Builder deleted successfully" };
  }
}
