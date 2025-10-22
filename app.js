import express, { response } from'express';

//intialize express app
const app = express();

const port = 3000;

//middleware
app.use(express.json());

try {
    app.listen(port, () => {
    console.log('listening on port 3000...');
});

} catch(e){
    console.log(e);
}

app.get('/james', async (request, response) => {
    response.status(200).json({message: 'Hello, James Reyes!'});
});
