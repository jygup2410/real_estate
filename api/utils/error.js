export const errorHandler = (satusCode, message) => {
    const error= new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error();
}