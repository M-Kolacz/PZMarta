const mainPath = process.env.REACT_APP_BACKEND_URL;

const userPath = `${mainPath}/users`;

export const loginApi = `${userPath}/login`;

export const registrationApi = `${userPath}/signup`;

export const acoountActivationApi = `${userPath}/activation`;
