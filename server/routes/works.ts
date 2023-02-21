import express from "express";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// worksデータの取得
router.get("/", async function (req: Request, res: Response) {
  try {
    const allWorks = await prisma.works.findMany({
      include: {
        skill: true,
        user: true,
      },
    });
    res.status(200).json(allWorks);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

// データの更新
router.put("/:id", async function (req: Request, res: Response) {
  try {
    const { title, link, image, userId, skillId } = req.body;
    const updateWork = await prisma.works.update({
      where: { id: parseInt(req.params.id) },
      data: {
        title: title,
        link: link,
        image: image,
        userId: parseInt(userId),
        skillId: parseInt(skillId),
      },
    });
    res.status(200).json(updateWork);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

// データの追加
router.post("/", async function (req: Request, res: Response) {
  try {
    const { title, link, image, userId, skillId } = req.body;
    const addWork = await prisma.works.create({
      data: {
        title: title,
        link: link,
        image: image,
        userId: parseInt(userId),
        skillId: parseInt(skillId),
      },
    });
    res.status(200).json(addWork);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

module.exports = router;
