import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { CarCategory } from "./models/car-category.model";
import { CreateCarCategoryDto } from "./dto/create-car-cateogry.dto";
import { UpdateCarCategoryDto } from "./dto/update-car-category.dto";
import { Op } from "sequelize";

@Injectable()
export class CarCategoryService {
  constructor(
    @InjectModel(CarCategory)
    private carCategoryModel: typeof CarCategory
  ) {}

  async createCarCategory(
    createCarCategoryDto: CreateCarCategoryDto
  ): Promise<CarCategory> {
    return await this.carCategoryModel.create(createCarCategoryDto);
  }

  async getAllCarCategories(): Promise<CarCategory[]> {
    return await this.carCategoryModel.findAll();
  }

  async getCarCategoryById(id: number): Promise<CarCategory | null> {
    return await this.carCategoryModel.findByPk(id);
  }

  async updateCarCategory(
    id: number,
    updateCarCategoryDto: UpdateCarCategoryDto
  ): Promise<CarCategory> {
    const updatedCarCategory = await this.carCategoryModel.update(
      updateCarCategoryDto,
      {
        where: { id },
        returning: true,
      }
    );

    return updatedCarCategory[1][0];
  }

  async deleteCarCategory(id: number) {
    const deletedCarCategory = await this.carCategoryModel.destroy({
      where: { id },
    });
    if (deletedCarCategory > 0) {
      return "CarCaategory o'chirildi";
    }
    return "Bunday Kompnaiya mavjud emas";
  }

  async findByName(name: string) {
    return this.carCategoryModel.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
  }
}
