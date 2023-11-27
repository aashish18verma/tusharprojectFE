export interface Employee {
    id: number;
    name: string;
    q1Rating: q1Rating;
    q2Rating: q2Rating;
    q3Rating: q3Rating;
    q4Rating: q4Rating;
    email: string;
    phone: string;
    jobTitle: string;
    imageUrl: string;
    employeeCode: string;
}


export class q1Rating {
    id: number;
    targetsAchieved: number = 0;
    attendance: number = 0;
    studentsAssessment: number = 0;
    presentation: number = 0;
    avg: number = 0;
}


export class q3Rating {
    id: number;
    targetsAchieved: number = 0;
    attendance: number = 0;
    studentsAssessment: number = 0;
    presentation: number = 0;
    avg: number = 0;
}
export class q2Rating {
    id: number;
    targetsAchieved: number = 0;
    attendance: number = 0;
    studentsAssessment: number = 0;
    presentation: number = 0;
    avg: number = 0;
}

export class q4Rating {
    id: number;
    targetsAchieved: number = 0;
    attendance: number = 0;
    studentsAssessment: number = 0;
    presentation: number = 0;
    avg: number = 0;
}

export interface LoginRequest {
    username: string;
    password: string;
}