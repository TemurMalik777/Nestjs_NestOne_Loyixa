import { IsBoolean, IsOptional, IsString, Length } from "class-validator";

export class UpdateCarCategoryDto {
  @IsOptional()
  @IsString()
  @Length(2, 50)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(5, 255)
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
