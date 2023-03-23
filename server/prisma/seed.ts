import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// モデル投入用のデータ定義
const skillSeeds = [
  { language: "JavaScript", framework: "React" },
  { language: "TypeScript", framework: "Next.js" },
  { language: "Python", framework: "Flask" },
  { language: "Ruby", framework: "Ruby on Rails" },
  { language: "Python", framework: "Django" },
  { language: "SQL", framework: "Prisma" },
];

const transferSkills = async () => {
  const skills = [];
  for (const s of skillSeeds) {
    const skill = prisma.skills.create({
      data: s,
    });
    skills.push(skill);
  }
  return await prisma.$transaction(skills);
};

const userSeeds = [
  {
    name: "Momo Sakura",
    email: "111111@sample.com",
    SNS: "Twitter",
    selfIntroduction: "転職活動中です。",
  },
];

const transferUser = async () => {
  const userS = [];
  for (const s of userSeeds) {
    const user = prisma.user.create({
      data: s,
    });
    userS.push(user);
  }
  return await prisma.$transaction(userS);
};

const workSeeds = [
  {
    title: "Todo app",
    link: "http://google.com",
    image: "AWS S3",
    userId: 1,
    skillId: 1,
  },
];

const transferWorks = async () => {
  const works = [];
  for (const s of workSeeds) {
    const work = prisma.works.create({
      data: s,
    });
    works.push(work);
  }
  return await prisma.$transaction(works);
};

// データを実際のモデル(DBテーブル)へ登録する処理を宣言
const main = async () => {
  console.log(`Start seeding ...`);

  await transferSkills();
  await transferUser();
  await transferWorks();

  console.log(`Seeding finished!!!`);
};

// モデルへ登録
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
