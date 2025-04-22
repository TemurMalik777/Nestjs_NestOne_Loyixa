import { IsBoolean, IsString, Length } from "class-validator";

export class CreateCarCategoryDto {
  @IsString()
  @Length(2,50)
  name: string;

  @IsString()
  @Length(5, 255)
  description: string;

  @IsBoolean()
  isActive: boolean;
}
