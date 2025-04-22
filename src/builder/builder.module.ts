import { Module } from '@nestjs/common';
import { BuilderController } from './builder.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Builder } from './models/builder.model';
import { BuilderService } from './builder.service';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [SequelizeModule.forFeature([Builder]), CompanyModule],
  controllers: [BuilderController],
  providers: [BuilderService],
})
export class BuilderModule {}
