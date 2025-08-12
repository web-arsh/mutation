class AppErr extends Error{
    statusCode: any;
    constructor(message: string,statusCode: any){
        super(message);
        this.statusCode = statusCode;
    }
}

export default AppErr;