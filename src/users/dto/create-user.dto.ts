import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "user1",
    description: "Foydalanuvchi ismi"
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "user1@mail.uz",
    description: "Foydalanuvchi email"
  })
  @IsEmail()
  email: string;
  // @IsStrongPassword({
  //   minLength: 6,
  //   minUppercase: 0,
  //   minSymbols: 0,
  //   minNumbers: 0,
  // })
  @ApiProperty({
    example: "Ubek1$t0n",
    description: "Foydalanuvchi pasroli"
  })
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: "USER",
    description: "Foydalanuvchi roli"
  })
  @IsString()
  @IsNotEmpty()
  value: string;
}
