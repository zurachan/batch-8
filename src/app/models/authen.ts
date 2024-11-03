export interface AuthenResponse {
    token: string;
    user: AuthenRequest;
    message: string
    success: boolean
}

export interface AuthenRequest {
    username: string,
    password: string
}