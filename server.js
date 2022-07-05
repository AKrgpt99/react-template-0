import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import indexRouter from "./routes/index";
import adminRouter from "./routes/admin";
import apiRouter from "./routes/api";

const app = express();

// view engine setup
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../public"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../")));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);
app.use("/rtzn-admin", adminRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (_, __, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("404");
});

export default app;
