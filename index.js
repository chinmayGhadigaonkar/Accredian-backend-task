import express from 'express';
import dotenv from 'dotenv'
import refral from './routers/referal.js'
import cors from  'cors'
const app = express();

dotenv.config();

const corsOptions = {
  origin: [
    "http://localhost:5173",
  ],
  credentials: true, //access-control-allow-credentials:true
};

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

app.use('/api', refral);




app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})