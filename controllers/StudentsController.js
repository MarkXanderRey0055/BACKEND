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
                });
            }
}


export const createStudent = async (req, res) => {
    const {srcode, name, course} = req.body
    try{  
        const studentId = await StudentsModel.insertStudent(srcode, name, course);
        res.status(200).json({success : true, message : studentId})
    }catch(e){
        console.log(e)
        res.status(500).json({success : false, message : "Internal Server Error"})
    }
}

export const editStudent = async (req, res) =>{
const {srcode, name, course} = req.body;
const {studentId} = req.params

try{
    const updateId = await StudentsModel.updateStudent(srcode, name, course, studentId);
    res.status(200).json({success: true, message: updateId});
}catch(e){
    console.log(e);
    res.status(500).json({success: false, message: "External Server Error"});
}
}

export const deleteStudent = async (req, res) => {
    const {studentId} = req.params;
    console.log(studentId);

    try{
        const deleteId = await StudentsModel.deleteStudent(studentId);
        res.status(200).json({success: true, message: deleteId});

    }catch(e){
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}
