import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";

import * as request from "supertest";
import { AppModule } from "../src/app.module";
import { error } from "console";

describe("User (e2e)", () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    const respone = await request(app.getHttpServer())
      .post("/auth/sign-in")
      .send({
        email: "dfgasdfj@mail.uz",
        password: "wsdfasdertyui",
      });
    token = respone.body.token;
    console.log("token", token);
  });
  it("users (GET) ---> 200 ok", () => {
    return request(app.getHttpServer())
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it('/users (GET) ---> 401 "Unauthoruzed", error', () => {
    return request(app.getHttpServer())
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(401);
  });

  // it("/auth/sign-up (POST) ---> 201", async () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/sign-up")
  //     .send({
  //       name: "adminjon",
  //       email: "admin23@mail.uz",
  //       password: "Amin1$t0n",
  //       value: "ADMIN",
  //     })
  //     .expect("Content-Type", /json/)
  //     .expect(201);
  // });

  it("/auth/sign-up (POST) ---> 201", async () => {
    return request(app.getHttpServer())
      .post("/auth/sign-up")
      .send({
        name: "adminjon",
        email: "admin23@mail.uz",
        password: "Amin1$t0n",
        value: "ADMIN",
      })
      .expect("Content-Type", /json/)
      .expect(400)
      .expect({
        message: "Bunday email fodalanuvchi mavjud",
        error: "Bad Request",
        statusCode: 400,
      });
  });

  // it("/auth/sign-up (POST) ---> 400", async () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/sign-up")
  //     .send({
  //       name: "adminjon",
  //       email: "admin23@mail.uz",
  //       password: "Amin1$t0n",
  //       value: "ADMIN",
  //     })
  //     .expect("Content-Type", /json/)
  //     .expect(400)
  //     .expect({
  //       message: "Bunday email fodalanuvchi mavjud",
  //       error: "Bad Request",
  //       statusCode: 400,
  //     });
  // });
  afterAll(async () => {
    await app.close();
  });
});
