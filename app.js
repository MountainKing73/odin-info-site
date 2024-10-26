const express = require("express");
const app = express();

app.get("/", function (req, res, next) {
  res.sendFile("index.html", { root: __dirname }, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Send: index.html");
    }
  });
});

app.get("/about", function (req, res, next) {
  res.sendFile("about.html", { root: __dirname }, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Send: about.html");
    }
  });
});

app.get("/contact-me", function (req, res, next) {
  res.sendFile("contact-me.html", { root: __dirname }, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Send: contact-me.html");
    }
  });
});

app.get("*", function (req, res, next) {
  res.sendFile("404.html", { root: __dirname }, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Send: 404.html");
    }
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
