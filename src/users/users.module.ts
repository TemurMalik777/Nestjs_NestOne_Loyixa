import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRole } from './models/user-role.model';
import { Role } from 'src/roles/models/role.model';
import { User } from './models/user.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserRole, Role]), 
    RolesModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
