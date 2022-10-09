import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareersService {

  private careers: Career[] = [{
    'puesto': 'Diseñador Experiencias UX BIZ',
    'area': 'Diseño e Innovación',
    'ubicacion': 'Monterrey NL',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Diseño multimedia \n  Licenciatura en diseño gráfico \n  Licenciatura en medios digitales',
    'conocimientos': 'Conocimientos diseñando experiencias de usuario (UX) \n  Conocimientos en metodologías de diseño y validación de productos  \n  Conocimiento de marketing digital y marcas \n  Excelentes habilidades de comunicación \n  Realizar investigaciones y pruebas de usuarios',
    'funciones': 'Serás encargado de buscar continuamente mejorar procesos, productos y comunicación.  \n  Utilizando metodologías y herramientas donde el usuario es el centro del diseño.  \n  La buena comunicación, síntesis y manejo de proyectos con equipos multidisciplinarios es vital para el buen desempeño del rol.  \n  Ser líder y tomar decisiones que generen valor inmediato,estar actualizado con el mercado bancario digital y sus tendencias',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'Desarrollador de Software iOS (JR, INTERMEDIO Y SR)',
    'area': 'Desarrollo',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ing. sistemas computacionales, Lic. en ciencias computacionales o afin.',
    'conocimientos': '-Portafolio de apps liberadas en AppStore \n  -Versionamiento de codigo Git  \n  -Manejo de patrones de diseño y estructurales  \n  -Conexiones a webservices (JSON/SOAP) \n  -Experiencia en eBanking \n  -Seguridad de aplicaciones (encriptacion) \n  -Swift \n  -ObjectiveC \n  -CocoaPods \n  -Carthhage \n  -CoreData \n  -CoreMedia  \n  -CoreVideo \n  -Realm \n  -Parseo y HTML \n  -Storyboatrds \n  -Autolayout \n  -Push Notifications \n  -Apis de mapas y geolocalizacion  \n  -Apis de apple y terceros (google,facebook,twiter, etc) \n  -Scrum',
    'funciones': '-Diseñar, desarrollar,provar e integrar nuevas caracteristicas de software movil basado en la plataforma IOS dentro de un ambiente creativo,proporcionando ideas  para la creacion de nuevas appde un ambiente creativo,proporcionando ideas  para la creacion de nuevas app. \n  -Diseño y desarrollode software movil. \n  -Realizacion de pruebas y depuracion de problemas de campo en sofware movil  \n  -Solucionar problemas de integracion y despliegue  \n  -Desarrollar soluciones alternativas',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'Desarrollador Back End  (JR, INTERMEDIO Y SR)',
    'area': 'Desarrollo',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ing. sistemas computacionales, Lic. en ciencias computacionales o afin.',
    'conocimientos': '-Participación en proyectos desde cero con lenguajes de desarrollo orientado a objetos. \n  -Programación con Java \n  -Micro servicios, AWS \n  -Seguridad de Aplicaciones Spring Security \n  -Experiencia en frameworks con Maven, REST,Spring y Boot 4.3 en adelante \n  -JPA ( ORM ) \n  -Manejo de dockers y/o contenedores. \n  -Bases de datos relacionales \n  -Experiencia en versionamiento de código \n  -Redhat (openshift) \n  -Deployments con ambiente de pruebas automatizadas \n  -Unit Testing, integration testing \n  -Base de datos no relacionales',
    'funciones': '-Diseña las soluciones de los requerimientos solicitados por el equipo de negocio, teniendo siempre como premisa que la solución sea sencilla de implementar, sea la que mejor desempeño ofrezca y que sea la que pueda ser desarrollada en el tiempo adecuado para cumplir con la expectativa del negocio.                                         \n  -Responsable de desarrollar, probar e integrar nuevas características de negocio que se ejecutan en un middleware y que estas ejecutan bajo ciertos protocolos y estándares cuidando la calidad del prioducto y del sistema',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'Desarrollador Android (JR, INTERMEDIO Y SR)',
    'area': 'Desarrollo',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ing. sistemas computacionales, Lic. en ciencias computacionales o afin.',
    'conocimientos': '-Portafolios de apps liberadas en Google Play Store \n  -Versonamiento de codigo GIT \n  -Patrones de diseño y estructurales  \n  -Conexiones a Webservice (JSON/SOAP) \n  -Android Studio \n  -Android nativo (java) \n  -Apis de google/ facebook \n  -Apis de google maps y geolocalizacion  \n  -Parseo y HTML \n  -Persistencia de datos (SQLite) \n  -Uso de componentes UI para interfaz visual \n  -MVP \n  -Push notifications \n  -Reconocimientos de patrones (lector QR,Codigo de barras) \n  -Seguridad de aplicaciones (encriptacion)',
    'funciones': '-Diseñar, desarrollar, probar, e integrar nuevas caracteristicas de software movil abasado en las plataformas Android dentro de un ambiente creativo,proponiendo, ideas para ñla creacion de nuevas apps \n  -Desarrollador soluciones de software movil basadas en documentos de diseño del sistema \n  -Realizar pruebas y depuracion deproblemas de campo con software movil \n  -Solucionar problemas de integracion y despliegue',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'Analista Programador (JR, INTERMEDIO Y SR)',
    'area': 'Desarrollo',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ing. sistemas computacionales, Lic. en ciencias computacionales o afin.',
    'conocimientos': '-Conocimiento en alguna librerías para reportes (Crystal Reports, Jasper Report, Apache Poi,etc.) \n  -Conocimiento en Base de Datos SQL. \n  -Java, Javascript, HTML, CSS \n  -Maven \n  -Spring,Spring Boot \n  -JSON, Rest API \n  -Conocimiento en algún tipo de servidor: Tomcat , Apache. \n  -Linux o Unix \n  -Scrum \n  -Deseable conocimiento frameworks de Javascript. \n  -Experiencia en la generación de reportes hacia clientes o usuarios. \n  -Experiencia en proyectos de lenguaje Java, Javascript.',
    'funciones': '-Detectar las necesidades de los usuarios, gestionando los recursos para obtener resultados; automatizando procesos e implementando mejoras para el área de Arquitectura TI.\t\t\t\t\t \n  -Desarrollar y programar a nivel base de datos y aplicativo.\t\t\t\t\t \n  -Realizar la revisión de código y scripts.\t\t\t\t\t \n  -Llevar a cabo el análisis del desarrollo para ver los impactos.\t\t\t\t\t \n  -Elaborar la documentación de todo lo desarrollado.\t\t\t\t\t \n  -Diseño y desarrollo de reportes para usuarios.\t\t\t\t\t \n  -Colaborar en optimizaciones de frameworks core.',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'Desarrollador C++ (JR, INTERMEDIO Y SR)',
    'area': 'Desarrollo',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ing. sistemas computacionales, Lic. en ciencias computacionales o afin.',
    'conocimientos': '',
    'funciones': '',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'ANALISTA DE PRUEBAS QA APIS - BAAS',
    'area': 'Desarrollo',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ing. sistemas computacionales, Lic. en ciencias computacionales o afin.',
    'conocimientos': '-Indispensable conocimientos de Banking as a Service(BaaS) \n  -Análisis, manejo y ejecución de casos pruebas de \n  APIs, \n  -Automatización de casos de prueba. \n  -Integración en ambientes de desarrollo, QA y Producción. \n  -Deseable conocimiento en B2B e integrador sandbox. \n  -Jira \n  -AML. \n  -Oracle. \n  -Postman. \n  -Manejo de base de datos.',
    'funciones': 'Analizar los diversos requerimientos a desarrollar con el objetivo de definir los escenarios de pruebas que sea la guía a seguir para garantizar el nivel de calidad  con el cual son implementados  los cambios a aplicaciones o bien la liberación de nuevas aplicaciones dentro de losambientes productivos',
    'prestaciones': ''
  }, {
    'puesto': 'ANALISTA DE PRUEBAS QA BANCA WEB',
    'area': 'Desarrollo',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ing. sistemas computacionales, Lic. en ciencias computacionales o afin.',
    'conocimientos': '-1 año en experiencia en prueba de conocimientos de banca electrónica. \n  -Exclusivo Monterrey y área Metropolitana. \n  -Preferentemente con conocimiento en Bitbucket. \n  -Jira. \n  -OCP. \n  -Sybase \n  -Postgres \n  -Experiencia en sector financiero. \n  -Experiencia en gestión de pruebas para funcionalidades de banca web personas físicas.',
    'funciones': 'Analizar los diversos requerimientos a desarrollar con el objetivo de definir los escenarios de pruebas que sea la guía a seguir para garantizar el nivel de calidad  con el cual son implementados  los cambios a aplicaciones o bien la liberación de nuevas aplicaciones dentro de losambientes productivos',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'ANALISTA DE PRUEBAS QA JR',
    'area': 'Desarrollo',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ing. sistemas computacionales, Lic. en ciencias computacionales o afin.',
    'conocimientos': '- 1 años o+ \n  -Sistemas operativos windows y Linux. \n  -Selenuim. \n  -Bitbucket. \n  -GIT \n  -Jira \n  -AML/TFS \n  -Conocimientos en tecnologías de prueba como caja negra, caja blanca y pruebas integrales. \n  -Lenguaje SQL. \n  -Manejo de motores de bases de datos, PostgreSQL y SQL Server. \n  -Generación de matriz de pruebas. \n  -Automatización de pruebas. \n  -Ejecución de pruebas de estres.',
    'funciones': 'Analizar los diversos requerimientos a desarrollar con el objetivo de definir los escenarios de pruebas que sea la guía a seguir para garantizar el nivel de calidad  con el cual son implementados  los cambios a aplicaciones o bien la liberación de nuevas aplicaciones dentro de losambientes productivos',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'ANALISTA DE PRUEBAS QA SR',
    'area': 'Desarrollo',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ing. sistemas computacionales, Lic. en ciencias computacionales o afin.',
    'conocimientos': '- 2 años o+ \n  -Sistemas operativos windows y Linux. \n  -Selenuim. \n  -Bitbucket. \n  -GIT \n  -Jira \n  -AML/TFS \n  -Conocimientos en tecnologías de prueba como caja negra, caja blanca y pruebas integrales. \n  -Lenguaje SQL. \n  -Manejo de motores de bases de datos, PostgreSQL y SQL Server. \n  -Generación de matriz de pruebas. \n  -Automatización de pruebas. \n  -Ejecución de pruebas de estres.',
    'funciones': 'Analizar los diversos requerimientos a desarrollar con el objetivo de definir los escenarios de pruebas que sea la guía a seguir para garantizar el nivel de calidad  con el cual son implementados  los cambios a aplicaciones o bien la liberación de nuevas aplicaciones dentro de losambientes productivos',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'GERENTE DE NEGOCIO (FIDUCIARIO)',
    'area': 'Arquitectura',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ingeniería o Licenciatura',
    'conocimientos': '- 2 años o+ \n  -Conocimiento en Producto Fiduciario Bancario \n  -Conocimiento de Metodología Ágil Desarrollo (Scrum) \n  -Gestión de Proyectos \n  -Análisis de Procesos de Negocio Bancarios \n  -Herramientas de documentación de flujos \n  -Conocimiento de Paqueterías Office',
    'funciones': 'Definir las soluciones para el producto (Consumo / Aplicaciones Móviles) buscando alinear a las estrategias y objetivos de la Institución. \n  Rediseñar  procesos de negocio que contribuyan a mejorar los tiempos y agilidad en el servicio a Clientes externos. \n  Contribuir al uso eficiente de los recursos en proyectos y en la operación de los servicios resultantes de Transformación \n  Diseñar soluciones de arquitectura de software',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'GERENTE DE NEGOCIO (CALL CENTER)',
    'area': 'Arquitectura',
    'ubicacion': 'Remoto',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ingeniería o Licenciatura',
    'conocimientos': '- 2 años o+ \n  -Conocimiento en Indicadores CAC (NPS, Productividad, Abandono, Nivel de Servicio) \n  -Conocimiento en el diseño e implementación de estrategias de servicio al cliente / Customer Experience \n  -Conocimiento de Plataformas de Comunicación de Centros de Contacto \n  -Implementación de CRMs \n  -Gestión de Tecnologías de Telecomunicaciones \n  -Conocimiento de IVR, atención de casos por redes sociales y whatsapp',
    'funciones': 'Definir las soluciones para el producto (Consumo / Aplicaciones Móviles) buscando alinear a las estrategias y objetivos de la Institución. \n  Rediseñar  procesos de negocio que contribuyan a mejorar los tiempos y agilidad en el servicio a Clientes externos. \n  Contribuir al uso eficiente de los recursos en proyectos y en la operación de los servicios resultantes de Transformación \n  Diseñar soluciones de arquitectura de software',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }, {
    'puesto': 'DBA Jr.',
    'area': 'Tecnología',
    'ubicacion': 'San Nicolás de los Garza, NL',
    'contrato': 'Tiempo Completo',
    'requisitos': 'Ingeniería en Sistemas, Licenciatura en Tecnologías de la Información o afín',
    'conocimientos': '- 1 año o + \n  -Conocimiento en Servidores Linux \n  -Conocimiento en Sistemas Operativos Windows \n  -Conocimiento en MYSQL y Oracle \n  -Experiencia en Identificar problemas de performance \n  -Experiencia en seguimiento y resolución de tickets \n  -Experiencia en completar asignaciones que están definidas en términos generales',
    'funciones': '- Colaborar en dar Soporte a las bases de datos que se creen en futuro, revisiones de producto, identificaciones de inventario y diferencias únicas. \n  - Apoyar en el desarrollo, mantenimiento y optimización de códigos de programación. \n  - Desarrollar scripts de shell  \n  - Realizar monitoreo de servicios e identificar casos para tunning de instancias',
    'prestaciones': '- Prestaciones superiores a las de la ley \n  - Capacitación constante \n  - Crecimiento laboral'
  }];

  constructor() {
  }

  getCareers() {
    return this.careers;
  }

  getCareer(idx: number) {
    return this.careers[idx];
  }
}

export interface Career {
  puesto: string;
  area: string;
  ubicacion: string;
  contrato: string;
  requisitos: string;
  conocimientos: string;
  funciones: string;
  prestaciones: string;
}
