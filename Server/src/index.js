import express from 'express';
import ConnectedDb from './DbConnection/Database.js';
import VisitorRoutes from './Routes/VisitorData.Route.js';
import AdminuserRoutes from './Routes/AdminUser.Route.js';
import cors from 'cors'
import 'dotenv/config'

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Hello, Kapil!`);
});

ConnectedDb()

app.use('/api', VisitorRoutes)
app.use('/api', AdminuserRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
