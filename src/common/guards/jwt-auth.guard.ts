import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}//Jwt token yaratsih yoke tekshirish uchun ishlatiladi
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    //logika
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({
        message: "Folydalanuvchi avoritzatisadan o'tmagan",
      });
    }
    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];

    if (bearer !== "Bearer" || !token) {
      throw new UnauthorizedException({
        message: "Bearer token aniqlanmadi",
      });
    }

    let user: any
    try {
        user = this.jwtService.verify(token)
    } catch (error) {
        throw new UnauthorizedException({
            message: "Token noto'g'ri",
            error: error})
    }
    req.user= user
    console.log(req);
    return true; //false
  }
}
