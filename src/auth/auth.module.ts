import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,//forwardRef
    JwtModule.register({
    global:true,
    secret:process.env.SECRET_KEY,
    signOptions: {expiresIn:process.env.SECRET_TIME}
  })],
  controllers: [AuthController],
  providers: [AuthService],
  exports: []
})
export class AuthModule {}
