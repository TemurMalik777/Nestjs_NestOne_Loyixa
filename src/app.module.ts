import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompanyModule } from './company/company.module';
import { Company } from './company/models/company.model';


@Module({
  imports: [ConfigModule.forRoot({envFilePath: ".env", isGlobal: true}),
    SequelizeModule.forRoot({
      dialect:"postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username:process.env.PG_USER,
      password:process.env.PG_PASSWORD,
      database:process.env.PG_DB,
      models: [Company],
      autoLoadModels: true,
      sync: {alter: true},
      logging: false //ture
    }),
    CompanyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
