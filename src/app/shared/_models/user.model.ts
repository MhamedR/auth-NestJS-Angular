export interface IRole {
    roleId: string;
    type: string;
    category: string;
    subCategory: string;
    users: IUser[];
}

export interface IUser {
    username: string;
    lastName: string;
    firstName: string;
    dateOfBirth: any;
    email: string;
    id: string;
    tel: any[];
    img?: string;
    createdAt: any;
    role: IRole;
    password: string;
    access_token: string
}