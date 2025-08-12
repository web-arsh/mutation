const globalError = (err, req, res, next) => {
    const statusCode = err.statusCode || 300;
    const message = err.message;
    const stack = err.stack;
    return res.status(statusCode).json({
        statusCode,
        message,
    });
};
export { globalError };
//# sourceMappingURL=globalError.js.map