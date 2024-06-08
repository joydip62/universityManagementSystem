import Joi from "joi";

// make validation using JOI
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .pattern(/^[A-Za-z]+$/, "capitalize")
    .messages({
      "any.required": "{#label} must start with an upper case letter",
    }),
  middleName: Joi.string().trim().allow(null, ""),
  lastName: Joi.string()
    .required()
    .trim()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      "any.required": "Last name is required",
      "string.pattern.base": "Last name must contain only letters",
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    "any.required": "Father name is required",
  }),
  fatherOccupation: Joi.string().allow(null, ""),
  fatherContactNO: Joi.string().allow(null, ""),
  motherName: Joi.string().allow(null, ""),
  motherOccupation: Joi.string().allow(null, ""),
  motherContactNO: Joi.string().allow(null, ""),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Local guardian name is required",
  }),
  occupation: Joi.string().required().messages({
    "any.required": "Local guardian occupation is required",
  }),
  contactNO: Joi.string().required().messages({
    "any.required": "Local guardian contact number is required",
  }),
  address: Joi.string().required().messages({
    "any.required": "Local guardian address is required",
  }),
  relation: Joi.string().required().messages({
    "any.required": "Local guardian relation is required",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    "any.required": "ID is required",
  }),
  name: userNameValidationSchema.required().messages({
    "any.required": "Name is required",
  }),
  gender: Joi.string().valid("male", "female").required().messages({
    "any.required": "Gender is required",
    "any.only": "Gender must be either male or female",
  }),
  dateOfBirth: Joi.string().allow(null, ""),
  email: Joi.string().email().required().messages({
    "any.required": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  contactNumber: Joi.string().required().messages({
    "any.required": "Contact number is required",
  }),
  emergencyContactNumber: Joi.string().allow(null, ""),
  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "O+", "O-")
    .required()
    .messages({
      "any.required": "Blood group is required",
      "any.only": "Blood group must be one of [A+, A-, B+, B-, O+, O-]",
    }),
  presentAddress: Joi.string().required().messages({
    "any.required": "Present address is required",
  }),
  permanentAddress: Joi.string().allow(null, ""),
  guardian: guardianValidationSchema.required().messages({
    "any.required": "Guardian is required",
  }),
  localGuardian: localGuardianValidationSchema.required().messages({
    "any.required": "Local guardian is required",
  }),
  profileImg: Joi.string().uri().allow(null, ""),
  isActive: Joi.string().valid("active", "blocked").required().messages({
    "any.required": "Status is required",
    "any.only": "Status must be either active or blocked",
  }),
});


export default studentValidationSchema;