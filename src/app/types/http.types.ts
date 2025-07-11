export type ApiResponse = {
    statusCode: number;
    isSuccess: boolean;
    message: string;
    data?: any;
};