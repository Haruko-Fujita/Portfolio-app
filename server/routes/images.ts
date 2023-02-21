import express from "express";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

import cors from "cors";
import AWS from "aws-sdk";

app.use(cors({ origin: true, credentials: false }));
app.post("/image", (req, res) => {
  const params = {
    Bucket: "My-app-imgs",
    Key: "A.jpg",
  };
  s3Client.getObject(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send(data);
    }
  });
});
