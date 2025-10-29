import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/BookRoutes.js";
import StudentsRoutes from "./routers/StudentsRoutes.js";

//intialize express app
const app = express();


//middleware
app.use(express.json());

try {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Listening to port ${process.env.PORT || 3000}...`);    
    });
} catch(e){
    console.log(e);
}

app.use('/books',bookRoutes);
app.use('/students',StudentsRoutes);
// app.get('/james', async (request, response) => {
//     response.status(200).json({message: 'Hello, James Reyes!'});
// });
