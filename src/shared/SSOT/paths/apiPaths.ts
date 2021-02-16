const mainPath = process.env.REACT_APP_BACKEND_URL;

const userPath = `${mainPath}/users`;

export const registrationApi = `${userPath}/signup`;

export const resendVerificationApi = `${userPath}/resend-verification`;

export const acoountActivationApi = `${userPath}/activation`;

export const loginApi = `${userPath}/login`;
