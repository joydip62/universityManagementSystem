import { Schema, model } from "mongoose";
import validator from "validator";


import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return value === firstNameStr;
      },
      message: "{VALUE} is not capitalized format",
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "{VALUE} is not valid",
    },
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String },
  fatherContactNO: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNO: { type: String },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNO: { type: String, required: true },
  address: { type: String, required: true },
  relation: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not a valid gender",
    },
    required: true,
  },
  dateOfBirth: { type: String, trim: true },
  email: { type: String, trim: true, required: true },
  contactNumber: { type: String, required: true, trim: true },
  emergencyContactNumber: { type: String, trim: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "O+", "O-"],
      message: "{VALUE} is not a valid blood group",
    },
    trim: true,
    required: true,
  },
  presentAddress: { type: String, required: true, trim: true },
  permanentAddress: { type: String, trim: true },
  guardian: {
    type: guardianSchema,
    trim: true,
    required: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    trim: true,
    required: true,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ["active", "blocked"],
      message: "{VALUE} is not a valid status",
    },
    required: true,
  },
});

// create model

export const StudentModel = model<Student>("Student", studentSchema);
