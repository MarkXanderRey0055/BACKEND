import pool from './db.js';

export const getStudents = async () => {
const [rows] = await pool.query ("SELECT * FROM tblstudents");
return rows;
}

// export const insertBook = async (DataTransferItemList, author) => {

// }