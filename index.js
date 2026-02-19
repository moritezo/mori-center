const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// در اینجا لینک ساب‌سکرایب اصلی خودت (لینک ورکر) را بین کوتیشن قرار بده
const MAIN_SUB_URL = "https://mori-sub.cr7-mori.workers.dev/sub";

app.get('/sub/', async (req, res) => {
    try {
        const response = await fetch(MAIN_SUB_URL);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send("Error fetching subscription data");
    }
});

app.get('/', (req, res) => {
    res.send("Mori-Center is Online.");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
