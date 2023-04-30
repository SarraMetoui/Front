
import { Role } from "./role";

export class User {
    id? : number;
    // phoneNumberUser : string ;
    // lastNameUser: string;
    // firstNameUser: string;
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    
    // addressUser: string; 
    // roleUser : string; 
    // dateBirthUser : string;
    // genderClient: string;
    // department: string; 
    // presence: string;
    // bonus: string; 
    // availaible: boolean;
    token?: string;
    number?: string; 
    address?: string; 
    country?: string; 
    city?: string; 
    lastname?: string; 
    topicid?:string;
    department?:string;
    status?:string;
    tasks?:string
    absent?:number;
    vacation?:number;
}
