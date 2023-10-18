import express, { Application } from "express";
import cors from "cors";
import { envVar } from "./config/envVariables";
import { db } from "./config/database";

const app: Application = express();
const port: number = parseInt(envVar.PORT);

const server = app.listen(process.env.PORT || port, () => {
    db()
});

process.on("uncaughtException", (error: Error) => {
  console.log("shutting down due to uncaughtException", Error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("shutting down due to unhandledRejection", reason);
  server.close(() => {
    process.exit(1);
  });
});
