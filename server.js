const express = require("express");
// const puppeteer = require("puppeteer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use(cors());
app.use(express.json());

const PORT = 4000;

app.get("/hearbeat", async (req, res) => {
  return res.send({ message: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://check with rolling update completely with webhook test-7:${PORT}`);
});
