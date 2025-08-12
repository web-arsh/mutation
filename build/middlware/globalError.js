const globalError = (err, req, res, next) => {
    const statusCode = err.statusCode || 300;
    const message = err.message;
    const stack = err.stack;
    const cause = err.cause;
    return res.status(statusCode).json({
        cause,
        message,
        stack,
    });
};
export { globalError };
//# sourceMappingURL=globalError.js.map