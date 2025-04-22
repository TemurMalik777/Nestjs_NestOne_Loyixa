import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { RolesService } from "src/roles/roles.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private readonly roleService: RolesService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userModel.create(createUserDto);
    const role = await this.roleService.findByValue(createUserDto.value)
    if (!role) {
      throw new NotFoundException("Bunday yo'l topilmdi")
    }

    await newUser.$set("roles", [role.id])//O'rtadagi tabli o'rtaga ulab oladi
    // newUser.roles = [role]
    // await newUser.save()
    return newUser;
  }

  findByEmail(email: string) {
    return this.userModel.findAll({where: {email}});
  }

  findAll() {
    return this.userModel.findOne({include: {all:true}});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
