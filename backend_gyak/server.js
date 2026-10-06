import express from 'express';
import dotenv from 'dotenv';
import db from './db.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/diakok', async (req,res) =>{
    try{
        const [rows] = await db.query('SELECT * FROM diakok');
        res.status(200).json(rows);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error: "Database Error!"});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`)
})