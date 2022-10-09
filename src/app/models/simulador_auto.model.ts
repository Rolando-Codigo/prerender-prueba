export interface SimuladorAutoInterface {
    costo: number;
    enganche: number; // porcentaje del enganche 0 al 100%
    plazo: number; // Meses del plazo de pago
    seguro: string; // financiado o de contado

    // datos personales
    nombreCompleto: string;
    telefono: string;
    estado: string;
    ciudad: string;
    regimenFiscal: string; // Física y Actividad Empresarial
    correo: string;
    gastosMensuales: number;
    sueldoNeto: number;
    aniosEnDomicilio: number;
    aniosEnTrabajo: number;

    acreditado: boolean;
}
