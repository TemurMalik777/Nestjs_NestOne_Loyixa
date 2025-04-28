import { ApiProperty } from "@nestjs/swagger";
import {
  IsDateString,
  IsDecimal,
  IsNotEmpty,
  IsNumber,
  IsString,
} from "class-validator";

export class CreateBuilderDto {
  @ApiProperty({
    example: "Sunnat",
    description: "Quruvchini ismi familyasi",
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: "brother day",
    description: "Quruvchini tug'lgan kuni",
  })
  @IsDateString()
  brith_day: Date;

  @IsDecimal()
  salary: number;

  @IsNumber()   
  companyId: number;
}
