export interface RespuestaGenericaModel<T> {
    resultset: T;
    status: 0;
    statuscode: string;
    statusmessage: string;
    timestamp: Date;
}
