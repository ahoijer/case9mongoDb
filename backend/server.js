import express from 'express';
import UserController from './controllers/UserController.js'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/register', UserController.addUser)

app.post('/', (req, res) => {
    let reply = { result: '', message: '' };

    UserController.loginUser(req.body).then((data) => {

        if (data.error !== undefined) {
            reply.result = 'fail';
            reply.message = data.error;
        } else {
            reply.result = 'success';
            reply.message = 'Successfully login'
        }
    }).catch(error => {
        console.log('Error loginUser', error);
    }).finally(() => {
        res.json(reply);
    })
})


app.listen(3001, function () {
    console.log("Listening on 3001");
});