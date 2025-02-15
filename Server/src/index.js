import express from 'express';
import ConnectedDb from './DbConnection/Database.js';

const app = express();

const port = 4000

app.get('/', (req, res) => {
    res.send(`Hello, Kapil!`);
});

ConnectedDb()

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});