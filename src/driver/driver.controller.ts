import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverService } from './driver.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driverService.createDriver(createDriverDto);
  }

  @Get()
  findAll() {
    return this.driverService.findAllDriver();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverService.findOneDriver(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.updateDriverDto(+id, updateDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}
