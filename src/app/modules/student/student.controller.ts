import { Request, Response } from "express";
import { StudentService } from "./student.service";
import studentValidationSchema from "./student.vatidation";

const createStudent = async (req: Request, res: Response) => {
  try {

    // request
    const {students: studentData} = req.body;

    // data validation using Joi
    const { error, value } = studentValidationSchema.validate(studentData); 

    if (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.details,
      });
    }
    
    // will class service
    const result = await StudentService.createStudentIntoDB(value);

    // response
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      date: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error,
    });
  }
};

const getStudent = async (req: Request, res: Response) => {
    try {
        const result = await StudentService.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "Student are retrieved successfully",
            date: result,
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: "Something went wrong",
          error: error,
        });
    }
}

const getStudentById = async (req: Request, res: Response) => { 
    try {
        const {studentId} = req.params;

        const result = await StudentService.getSingleStudentFromDB(studentId);
        res.status(200).json({
          success: true,
          message: "Student is retrieved successfully",
          date: result,
        });
    } catch (error) {
        res.status(500).json({
          success: false,
          message: "Something went wrong",
          error: error
        });
    }
}

export const StudentController = {
  createStudent,
  getStudent,
  getStudentById,
};
