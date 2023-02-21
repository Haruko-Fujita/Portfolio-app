import S3 from "aws-sdk/clients/s3";
import { NextApiRequest, NextApiResponse } from "next";
require('dotenv').config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const s3 = new S3({
    apiVersion: "2006-03-01",
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    endpoint: process.env.endpoint,
    region: process.env.region
  });



  const post = s3.createPresignedPost({
    Bucket: process.env.Bucket,
    Fields: {
      key: req.query.file,
      "Content-Type": req.query.fileType,
    },
    Expires: 60,
    Conditions: [
      ["content-length-range", 0, 1048576], // up to 1 MB
    ],
  });

  res.status(200).json(post);
}
