import * as StudentsModel from '../models/StudentsModel.js';

export const fetchStudents = async (req, res,) => {
    try {
        const students = await StudentsModel.getStudents();
        res.status(200).json(students);
            }catch(e){
                console.log(e);
                res.status(500).json({
                    sucess: false,
                    message: "Internal Server Error"
                })
            }
}
