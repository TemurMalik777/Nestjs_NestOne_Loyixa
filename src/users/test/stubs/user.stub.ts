import { User } from "../../models/user.model"



export const userStub = ():Partial<User> =>{
    return {
        id: 1, 
        name: "userim",
        email: "user@mail.uz",
        password: "1234567",
    }
}