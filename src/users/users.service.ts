import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { RolesService } from "../roles/roles.service";
import { Role } from "../roles/models/role.model";
import { AddRoleDto } from "./dto/add-role.dto";
import { ActivateUserDto } from "./dto/activate-user.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private readonly roleService: RolesService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.userModel.create(createUserDto);
    const role = await this.roleService.findByValue(createUserDto.value);
    if (!role) {
      throw new NotFoundException("Bunday yo'l topilmdi");
    }

    // await newUser.$set("roles", [role.id]); //O'rtadagi tabli o'rtaga ulab oladi
    // newUser.roles = [role]
    // await newUser.save()
    return newUser;
  }

  async findByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
      include: {
        model: Role,
        attributes: ["value"],
        through: { attributes: [] },
      },
    });
    return user?.dataValues;
  }

  // async findByEmail(email: string): Promise<User | null> {
  //   return await this.userModel.findOne({ where: { email }, include: { all: true } });
  // }

  findAll() {
    return this.userModel.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const user = await this.userModel.findByPk(id);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
   await this.userModel.destroy({where: {id}})
   return {message: `Foydalanuvchi ochirildi`}
  }

  // async deleteCompany(id: number){
  //   const deleteCompany = await this.companyModule.destroy({where: {id}})
  //   if (deleteCompany>0) {
  //       return "Companiya O'chirildi"
  //   }
  //   return "Bunday companiya mavjud emas"
  // }

  async addRole(addRoleDto: AddRoleDto) {
    const user = await this.findOne(addRoleDto.userId);
    console.log("addRoleDto.value:", addRoleDto);
    const role = await this.roleService.findByValue(addRoleDto.value);
    if (!role) {
      throw new NotFoundException("Bunday role mavjud emas");
    }

    if (!user) {
      throw new NotFoundException("Bunday user mavjud emas");
    }
    await user.$add("roles", role.id);
    return "Role qo'shildi";
  }

  async removeRole(addRoleDto: AddRoleDto) {
    const user = await this.findOne(addRoleDto.userId);
    const role = await this.roleService.findByValue(addRoleDto.value);

    if (!role) {
      throw new NotFoundException("Bunday role mavjud emas");
    }

    if (!user) {
      throw new NotFoundException("Bunday user mavjud emas");
    }
    await user.$remove("roles", role.id);
    return "Role Olib tashlandi";
  }

  async activateUser(activateUserDto: ActivateUserDto) {
    const user = await this.findOne(activateUserDto.userId);

    if (!user) {
      throw new BadRequestException("Bunday foydalanuvchi topilmadi");
    }

    user.is_active = true;
    await user.save();

    return "Foydalanuvchi qo'shildi";
  }
}
