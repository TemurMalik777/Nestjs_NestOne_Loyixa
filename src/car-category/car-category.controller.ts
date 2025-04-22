import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { CarCategoryService } from "./car-category.service";
import { CarCategory } from "./models/car-category.model";
import { CreateCarCategoryDto } from "./dto/create-car-cateogry.dto";
import { UpdateCarCategoryDto } from "./dto/update-car-category.dto";

@Controller("car-category")
export class CarCategoryController {
  constructor(private readonly carCategorySerive: CarCategoryService) {}

  @Post()
  async createCarCategory(
    @Body() createCarCategoryDto: CreateCarCategoryDto
  ): Promise<CarCategory> {
    return this.carCategorySerive.createCarCategory(createCarCategoryDto);
  }

  @Get()
  async getAllCarCategories() {
    return this.carCategorySerive.getAllCarCategories();
  }

  @Get(":id")
  async getCarCategoryById(@Param("id") id: string) {
    return this.carCategorySerive.getCarCategoryById(+id);
  }

  @Put(":id")
  async updateCarCategory(
    @Param("id") id: string,
    @Body() updateCarCategoryDto: UpdateCarCategoryDto
  ) {
    return this.carCategorySerive.updateCarCategory(+id, updateCarCategoryDto);
  }

  @Delete(":id")
  async deleteCarCategory(@Param("id") id: string) {
    return this.carCategorySerive.deleteCarCategory(+id);
  }

  @Get()
  async findByName(@Query("name") name: string) {
    if (name) {
      return this.carCategorySerive.findByName(name);
    }
    // Agar name yo'q bo‘lsa — hamma kompaniyalarni qaytarish
    return this.carCategorySerive.getAllCarCategories();
  }
}
