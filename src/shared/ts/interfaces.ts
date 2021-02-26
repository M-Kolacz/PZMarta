export interface ILogin {
    email: string;
    password: string;
}
/** Response from the API  */
export interface IUserData {
    userId: string;
    token: string;
}
/** Response from the API  */
export interface IMessageResponse {
    message: string;
}

/** Param which has token from the API   */
export interface IActivationParam {
    token: string;
}
/** Error response from the API   */
export interface IErrorResponse {
    message: string;
}
