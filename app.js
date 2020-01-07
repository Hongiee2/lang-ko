const express = require("express");

const app = express();
const router = express.Router();
const { parseEmotions, parseEntities } = require("./middleware/lang");

const { PORT } = process.env;

app.use(express.static("public"));

app.use(router);
router.get("/gcp-lang/emotion", parseEmotions);
router.get("/gcp-lang/entity", parseEntities);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
