const express = require('express');
const axios = require('axios'); // استفاده از کتابخانه قوی‌تر برای دریافت داده
const app = express();
const port = process.env.PORT || 3000;

const MAIN_SUB_URL = "https://mori-sub.cr7-mori.workers.dev/sub";

app.get('/sub', async (req, res) => {
    try {
        const response = await axios.get(MAIN_SUB_URL);
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.send(response.data);
    } catch (error) {
        res.status(500).send("خطا در ارتباط با ورکر: " + error.message);
    }
});

app.get('/', (req, res) => {
    res.send("Mori-Center is Online and Ready.");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
