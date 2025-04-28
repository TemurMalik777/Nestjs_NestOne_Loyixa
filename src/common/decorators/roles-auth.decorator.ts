import { SetMetadata } from "@nestjs/common"
import { ROLES_KEY } from "../../app.constants"


export const Rolees = (...roles:string[])=>SetMetadata(ROLES_KEY, roles)