class AppErr extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
export default AppErr;
//# sourceMappingURL=AppErr.js.map