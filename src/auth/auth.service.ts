import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";

import * as bcrypt from "bcrypt";
import { User } from "../users/models/user.model";
import { SignInDto } from "./dto/sign-in.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  private async generateToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      roles: user.roles,
      isActive: user.is_active,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async signUp(createUserDto: CreateUserDto) {
    const condidate = await this.userService.findByEmail(createUserDto.email);
    console.log(condidate);
    if (condidate) {
      // throw new HttpException " "
      throw new BadRequestException("Bunday email fodalanuvchi mavjud");
    }
    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPassword;
    const newUser = await this.userService.create(createUserDto);

    return newUser;
  }

  async singup(createUserDto: CreateUserDto) {
    const condidate = await this.userService.findByEmail(createUserDto.email);

    if (condidate) {
      // throw new HttpException("yo'qolll",HttpException.BAD_REQUEST) ;
      throw new BadRequestException("yo'qolll");
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 7);
    createUserDto.password = hashedPassword;
    const newUser = await this.userService.create(createUserDto);
    return newUser;
  }

  async singIn(singinDto: SignInDto) {
    const user = await this.userService.findByEmail(singinDto.email);
    if (!user) {
      throw new UnauthorizedException("Email yoki password xato");
    }

    const validPassword = await bcrypt.compare(
      singinDto.password,
      user.password
    );
    if (!validPassword) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }

    //     for(const role of user.roles){
    //         if (role.value == singinDto.value.toUpperCase()) {
    //             return this.generateToken
    //         }
    //     }
    return this.generateToken(user);
    // }
  }
  // throw new ForbiddenException("Sizda bunday role yo'q")
}
