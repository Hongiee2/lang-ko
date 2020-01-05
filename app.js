const express = require('express');

const app = express();
const router = express.Router();
const { parseGcpLang } = require('./middleware/lang');

const { PORT } = process.env;

app.use(express.static('public'));

app.use(router);
router.get('/gcp-lang', parseGcpLang);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}!`);
});
