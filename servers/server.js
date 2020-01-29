import express from 'express';
import dotenv from 'dotenv';
import Route from './routes/route';

const App = express();
const PORT = process.env.PORT || 3001;

dotenv.config({ path: "./config/rush-b.env" });
App.use('/', Route);

App.listen(PORT, () => {
    console.log(`Server backend berada di ${PORT}`)
});