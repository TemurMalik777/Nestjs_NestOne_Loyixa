import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Driver } from './model/driver.model';

@Injectable()
export class DriverService {
  constructor(@InjectModel(Driver) private driverModule: typeof Driver){}


  async createDriver(createDriverDto: CreateDriverDto):Promise<Driver> {
    const driver = await this.driverModule.create(createDriverDto)
    return driver
  }

  async findAllDriver():Promise<Driver[]> {
    return this.driverModule.findAll({include: {all: true}})
  }

  async findOneDriver(id: number): Promise<Driver | null> {
    return this.driverModule.findByPk(id)
  }

  async updateDriverDto(
    id: number, 
    updateDriverDto: UpdateDriverDto
  ):Promise<Driver | null> {
    const updateDriver = await this.driverModule.update(updateDriverDto, 
    {
      where: {id},
      returning: true
    })
    return updateDriver[1][0]
  }

  async remove(id: number) {
    const deleteDriver = await this.driverModule.destroy({where: {id}})
    if (deleteDriver>0) {
      return "Driver O'chirildi"
    }
    return "Bunday Driver Mavjud emas"
  }
}
