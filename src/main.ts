import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { join } from "path";
// import { ValidationPipe } from "@nestjs/common";
// import { Logger } from "@nestjs/common";

async function start() {
  try {
    // Logger.overrideLogger(false);//true
    const PORT = process.env.PORT || 3030;
    const app = await NestFactory.create(AppModule);
    // app.us(join(__dirname, '..', 'static'))
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle("Nest-One project")
      .setDescription("NEST-ONE REST API")
      .setVersion("1.0")
      .addTag("NestJS", "Validation")
      .addTag("a", "Guard")
      .build();

    const documetn = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("docs", app, documetn)
    // app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    await app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
