import express from 'express';
import RegisterController from './controllers/RegisterController.js'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/register', RegisterController.addUser)

app.listen(3001, function () {
    console.log("Listening on 3001");
});