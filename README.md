# 構成  
https://www.canva.com/design/DAFVMPSLUAI/25_AaxK3gckHKjA6tJwY7w/view?utm_content=DAFVMPSLUAI&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink
  
## 残タスク
- ログ、例外処理
- マイページでAPI呼び出し（post/put）
- S3画像のURL取得/表示
- firebaseの環境変数化（エラー解消できず直書き）
## day7
- TypeScript(client/getWorks.tsx, server/works.ts)
- AWS S3に画像登録(完了)
## day5-6
- AWS S3に画像登録API(エラー対応)
## day4
- TypeScript（Express_serverのみ）
- Prismaでテーブル作成、seed投入
- API作成（get/post/put）postmanで動作確認
## day3
- AWS設定（API Gateway）
- firebase認証（ログイン/ログアウト判定し、マイページを表示）
## day2
- 画面作成（ユーザ登録/ログイン）
- firebase認証（ユーザ登録）←不要
## day1  
- 構成図作成
- Next.js/Expressサーバ起動
- firebase登録、AWS登録
  
  
### client 環境をローカルに生成、起動OK  
```npx create-next-app@9 client --typescript```  
clientディレクトリ生成、配下にNext.js(TS)セット  
  
```cd client```  
```npm install axios```  
```npm i winston```  
```npm install --save react-router-dom```  
```npm install --save firebase```  
```npx tsc --init```初回のみ、tsconfig.json生成  
  
```npm install typescript```  
```npx tsc --init```初回のみ、tsconfig.json生成  
  
```npm install nodemon```  
```npm install ts-node-dev```プログラムの修正がリアルタイムで反映するため  
```npm install -D typescript```  
```npm i --save-dev @types/node```  
```npm install -D @types/cookie-parser @types/morgan @types/http-errors```  
  
```npm run dev```  
http://localhost:3000 表示ok  
  
  
  
### Express 環境をローカルに生成、起動ok   
```npm install express-generator -g```  
```bash```  
```express --view=pug server```  
server ディレクトリの中にpackege.json他が生成される(node_moduleはない)  
  
```cd server```  
```npm install```  
node_moduleディレクトリが生成される  
```npm install typescript```  
```npx tsc --init```初回のみ、tsconfig.json生成  
  
```npm install nodemon```  
```npm install ts-node-dev```プログラムの修正がリアルタイムで反映するため  
```npm install router```  
```npm install -D typescript @types/express```  
```npm i --save-dev @types/node```  
```npm install -D @types/cookie-parser @types/morgan @types/http-errors```  
```npm install rimraf```ビルド（TypeScriptからJavaScriptへの変換）先のディレクトリをクリアするため  
```npm install npm-run-all```npmスクリプトを複数実行するため  
```npm i winston```  
```npm install aws-sdk multer-s3 multer @aws-sdk/client-s3```  
```npm i --save-dev @types/multer @types/multer-s3```  
```npm install cors```  
```npm install --save-dev @types/cors```  
  
package.jsonに追記  
```  
  "scripts": {
    "start:debug": "nodemon -L --inspect=0.0.0.0:9229 ./bin/www",  
    "dev": "ts-node-dev --respawn routes/index.ts", // プログラムの修正をリアルタイムで反映（TS→JS、サーバ起動）  
    "clean": "rimraf dist",  
    "tsc": "tsc", // コンパイルされ、jsファイルに変換  
    "build": "npm-run-all clean tsc"  
  },
```  
  
```npm run dev```  
http://localhost:5000/ Express表示ok  
  
  
  
### serverディレクトリでPrisma環境構築 
https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project  
  
  
  
### MySQL起動
```"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqld"```  
起動確認  
```mysqladmin ping -u root -p```  
```mysqld is alive```表示確認  
  
起動できない場合：windows + r, services.msc, mySQL80,サービス開始  
  