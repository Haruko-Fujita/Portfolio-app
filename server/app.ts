import { Request, Response, NextFunction } from "express";
import createError from 'http-errors';
import express from 'express';

import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

const router = express.Router();
module.exports = router;

const indexRouter = require('./routes/index');
const worksRouter = require('./routes/works');
// const upImgRouter = require('./routes/upImg');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({ extended: true }));//post用
// app.use(bodyParser.json());//post用
const options: cors.CorsOptions = {
  origin: 'http://localhost:3000', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
};
app.use(cors(options));

app.use(express.json());


app.use('/', indexRouter);
app.use('/works', worksRouter);
// app.use('/upImg', upImgRouter);

// catch 404 and forward to error handler
app.use(function(req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

module.exports = app;
