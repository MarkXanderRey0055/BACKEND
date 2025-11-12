import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/BookRoutes.js";
import StudentsRoutes from "./routers/StudentsRoutes.js";
import UserRoutes from "./routers/UserRoutes.js";
import cors from "cors";

//intialize express app
const app = express();

let corsOptions = {
    origin: process.env.ORIGIN
}


//middleware
app.use(express.json());
app.use(cors(corsOptions));


//this is used to log the req on the console
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
})

try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listening to port ${process.env.PORT || 3000}...`);    
    });
} catch(e){
    console.log(e);
}

app.use('/books',bookRoutes);
app.use('/students',StudentsRoutes);
app.use('/users', UserRoutes);
// app.get('/james', async (request, response) => {
//     response.status(200).json({message: 'Hello, James Reyes!'});
// });

