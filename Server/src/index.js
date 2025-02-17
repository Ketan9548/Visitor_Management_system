import express from 'express';
import ConnectedDb from './DbConnection/Database.js';
import VisitorRoutes from './Routes/VisitorData.Route.js';
import cors from 'cors'

const app = express();

const port = 4000

app.use(cors())

app.get('/', (req, res) => {
    res.send(`Hello, Kapil!`);
});

ConnectedDb()

app.get('/api', VisitorRoutes)

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});