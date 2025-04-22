import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService  {
    constructor(private readonly userService: UsersService){}

    async signUp(createUserDto: CreateUserDto){
        const condidate = await this.userService.findByEmail(createUserDto.email)
        console.log(condidate);
        if (condidate.length>0) {
            // throw new HttpException " "
            throw new BadRequestException("Bunday email fodalanuvchi mavjud")
        }
        const hashedPassword = await bcrypt.hash(createUserDto.password, 7)
        createUserDto.password = hashedPassword
        const newUser = await this.userService.create(createUserDto)

        return newUser
    }
}
