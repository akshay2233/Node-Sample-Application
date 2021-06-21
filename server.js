const express = require("express");
const app = express();
const restRouter = require('./api/index')
app.use("/api", (req, res, next) => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  res.locals.time = time;
  next();
});
app.use('/api', restRouter);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.message = "Invalid route";
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message,
    },
  });
});


app.listen(3000, () => {
  console.log("server:3000");
});
