# ポートフォリオ アプリ

## 機能

- Firebase での認証（ユーザー登録、メールアドレスでのログイン）
- AWS S3 への画像アップロード
- 習得した言語の選択

## 使用技術

- JavaScript: ES2016
- TypeScript: 4.9.4
- React: 18.2.0
- Next.js: 13.0.7
- Express: 4.16.1
- Prisma: 4.8.0
- MySQL: 8.0.31
- Firebase: 9.15.0
- Amazon S3

## システム構成

![image](https://user-images.githubusercontent.com/94355319/222140205-53f5cd7f-8f22-4757-a59b-5a83a522e344.png)

## 使い方

1. リポジトリのクローン  
`git clone https://github.com/Haruko-Fujita/Portfolio-app.git`

2. server 起動  
   `cd server` `npm install`  
   package.json を下記の通り修正

```
  "scripts": {
    "start:debug": "nodemon -L --inspect=0.0.0.0:9229 ./bin/www",
    "dev": "ts-node-dev --respawn routes/index.ts",
    "clean": "rimraf dist",
    "tsc": "tsc",
    "build": "npm-run-all clean tsc"
  },
```

`npm run dev`

3. MySQL 起動

4. Prisma 環境構築  
   `cd server` `npx prisma` Prisma CLI を起動  
   `npx prisma migrate dev --name init` DB にスキーマとテーブル作成  
   `npx ts-node prisma/seed.ts` seed が DB に追加される

5. client 起動  
   `cd client` `npm install` `npm run dev`  
   `http://localhost:3000/` アプリにアクセスする