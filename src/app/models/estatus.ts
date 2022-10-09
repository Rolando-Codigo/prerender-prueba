/**
 * Clase general para agrupar los Estatus (number, string)
 */
export class Estatus {
    public static get ESTATUS_ACTIVO(): number { return 2; }
    public static get ESTATUS_REGISTRO_ALTA(): string { return 'RA'; }
    public static get ESTATUS_REGISTRO_INACTIVO(): string { return 'RI'; }
    public static get ESTATUS_FRIENDS_FAMILY(): string { return 'FF'; }
    public static get ESTATUS_REGISTRO_CANCELADO(): string { return 'RC'; }
    public static get ESTATUS_REGISTRO_TRAMITE(): string { return 'RT'; }
    public static get ESTATUS_REGISTRO_FINALIZADO(): string { return 'RF'; }
    public static get ESTATUS_REGISTRO_EXPIRADO(): string { return 'RE'; }
    public static get ESTATUS_REGISTRO_BLOQUEADO(): string { return 'RB'; }
    public static get ESTATUS_FALLIDO_OTP(): number { return 0; }
    public static get ESTATUS_EXITOSO_OTP(): number { return 1; }
    public static get STATUS_EXITOSO(): string { return '0'; }
    public static get STATUS_FALLIDO(): string { return '1'; }
    public static get STATUS_CODIGO_VERIFICACION_FALLIDO(): string { return '03'; }
    public static get STATUS_INTENTOS_FALLIDOS_OTP(): string { return '02'; }
    public static get STATUS_MSJ_ERROR_GENERAL(): string { return '0'; }
    public static get STATUS_MSJ_ERROR_RN(): string { return '1'; }
    public static get STATUS_MSJ_ERROR_CRITERIO(): string { return '2'; }
    public static get STATUS_ERROR_UBICACION(): number { return 422; }
    public static get STATUS_ERROR_DOMICILIO_ENTREGA(): number { return 406; }
    public static get STATUS_DECRETO_DENEGADO(): string { return 'DENEGADO'; }
    public static get STATUS_DECRETO_PREAPROBADO(): string { return 'PREAPROBADO'; }
    public static get STATUS_DECRETO_ENESTUDIO(): string { return 'ESTUDIO'; }
    public static get STATUS_DECRETO_FALLIDO(): string { return 'FALLIDO'; }
    public static get STATUS_AUTORIZACION_BURO_RECHAZADO(): string { return 'RECHAZADO'; }
    public static get STATUS_AUTORIZACION_BURO_AUTORIZADO(): string { return 'AUTORIZADO'; }
    public static get STATUS_VIDEOLLAMADA_CLOSE(): string { return 'close'; }
    public static get STATUS_VIDEOLLAMADA_DENY(): string { return 'deny'; }
    public static get STATUS_VIDEOLLAMADA_APPROVE(): string { return 'approve'; }


    public static get ESTATUS_AUTENTICACION_SOLICITADO(): string { return 'Solicitado'; }
    public static get ESTATUS_AUTENTICACION_AUTORIZADO(): string { return 'Autorizado'; }
    public static get ESTATUS_AUTENTICACION_PROCESADO(): string { return 'Procesado'; }
    public static get ESTATUS_AUTENTICACION_CANCELADA(): string { return 'Cancelada'; }
    public static get ESTATUS_AUTENTICACION_RECHAZADO(): string { return 'Reachazado'; }
}
