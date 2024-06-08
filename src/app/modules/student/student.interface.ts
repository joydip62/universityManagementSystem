export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
}; 
    
export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNO: string;
  motherName: string;
  motherOccupation: string;
  motherContactNO: string;
};
export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNO: string;
  address: string;
  relation: string;
};


export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  email: string;
  dateOfBirth?: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: "active" | "blocked";
};
