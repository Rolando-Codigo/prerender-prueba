export class CareersModel {
    areasExperiencia: string; // areas de experiencia del interesado
    base64: string; // archivo en base64
    captcha: string; // validacion captcha
    celular: string; // numero de telefono
    correo: string; // correo electronico
    disponibidadCambio: boolean; // disponibilidad de cambio de vivienda true o false
    extensionDocumento: string; // extension de documento (siempre mandarlo con el punto)
    nivelEstudio: string; // nivel de estudio del interesado
    nombreCompleto: string; // nombre del interesado
    nombreDocumento: string; // nombre del archivo (se puede mandar vacio y dara por default el nombre CV)
    puesto: string; // puesto o vacante
}
