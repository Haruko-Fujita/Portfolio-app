# ポートフォリオ アプリ
<!-- "hoge"が何かを簡潔に紹介する -->

<!-- DEMO
"hoge"の魅力が直感的に伝わる画像を張る -->

<!-- Features
"hoge"のセールスポイントや差別化などを説明する -->

## 機能
- Firebaseでの認証（ユーザー登録、メールアドレスでのログイン）
- AWS S3への画像アップロード
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
![image](https://user-images.githubusercontent.com/94355319/221757777-90900dca-5d9e-4a13-8021-b0695dd4aa78.png)

<!-- Usage
DEMO の実行方法など、"hoge"の基本的な使い方を説明する -->
  
## 使い方
1.リポジトリのクローン  
```git clone https://github.com/Haruko-Fujita/Portfolio-app.git```  
  
2.サーバー起動
  
2-1.Next.js起動  ```cd client``` ```npm install``` ```npm run dev```    
アプリにアクセスする  ```http://localhost:3000```  
  
2-2.Express起動  ```cd server``` ```npm install``` ```npm run dev```  
アプリにアクセスする ```http://localhost:5000/```
  
2-3.MySQL起動
```"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqld"```  
  
<!-- 3.docker コマンドを入力
```docker-compose run -w /usr/src/app --rm frontend npm install```
```docker-compose up``` -->

<!-- vercelにデプロイする -->
