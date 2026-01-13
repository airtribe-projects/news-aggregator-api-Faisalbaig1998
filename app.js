const express = require("express");
const app = express();
require("dotenv").config();
const usersRoute = require("./routes/route.users");
const newsRoute = require("./routes/route.news");

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample route

app.use("/users", usersRoute);
app.use("/news", newsRoute);

// app.listen(port, (err) => {
//   if (err) {
//     return console.log("Something bad happened", err);
//   }
//   console.log(`Server is listening on ${port}`);
// });

if (process.env.NODE_ENV !== "test") {
  app.listen(port, (err) => {
    if (err) {
      console.log("Something bad happened", err);
    }
    console.log(`Server is listening on ${port}`);
  });
}

module.exports = app;
