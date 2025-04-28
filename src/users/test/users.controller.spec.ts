import { Test } from "@nestjs/testing";
import { UsersController } from "../users.controller";
import { UsersService } from "../users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../models/user.model";
import { CreateUserDto } from "../dto/create-user.dto";
import { userStub } from "./stubs/user.stub";

jest.mock("../users.service");

describe("Users controller testing", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeAll(async () => {
    const modulRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, JwtService],
    }).compile();

    usersController = modulRef.get<UsersController>(UsersController);
    usersService = modulRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });
  it("User controller should be defined", () => {
    expect(usersController).toBeDefined();
  });
  test("User service should be defined", () => {
    expect(usersService).toBeDefined();
  });

  describe("create User testing", () => {
    describe("when create user called", () => {
      let user: User;
      let createUserDto: CreateUserDto;
      beforeAll(async () => {
        createUserDto = {
          name: userStub().name!,
          email: userStub().email!,
          password: userStub().password!,
          value: "user",
        };
        user = await usersController.create(createUserDto);
      });

      it("then it shuld call userService", () => {
        expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      });

      it("then it should return user", () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe("findAll users", () => {
    describe("when findAll users called", () => {
      let users: User[];
      beforeAll(async () => {
        users = await usersController.findAll();
        console.log(users);
      });

      it("then it should call usersService", () => {
        expect(usersService.findAll).toHaveBeenCalled();
      });

      test("then it should teturn users", () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  describe("findOne users", () => {
    describe("when findOne users called", () => {
      let user: User | null;
      let id: number;
      beforeAll(async () => {
        id = userStub().id as number;
        user = await usersController.findOne(id);
        console.log(user);
      });

      it("then it should call usersService", () => {
        expect(usersService.findOne).toHaveBeenCalledWith(id);
      });

      test("then it should return users", () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe("remove users", () => {
    describe("when remove users is called", () => {
      let result: Object;

      beforeAll(async () => {
        result = await usersController.remove(String(userStub().id));
      });

      it("then it should call usersService remove method", () => {
        expect(usersService.remove).toHaveBeenCalledWith(userStub().id);
      });

      it("then it should return success message", () => {
        expect(result).toEqual({ message: "Foydalanuvchi o'chirildi" });
      });
    });
  });
});
