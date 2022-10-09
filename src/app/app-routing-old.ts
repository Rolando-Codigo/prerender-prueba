
/*const APP_ROUTES: Routes = [
    // { path: 'inicio', component: InicioComponent },
    // { path: 'modal', component: ModalComponent },
    { path: '', component: ParaMiComponent, canActivate: [UtmsGuard] },
    { path: 'parami/hey-pro', component: GiveawayHeyProComponent, canActivate: [UtmsGuard] },

    { path: 'parami/tdc', component: TarjetaDeCreditoComponent, canActivate: [UtmsGuard] },
    { path: 'personas/inversion', component: InversionComponent, canActivate: [UtmsGuard] },

    // { path: 'personas/cuentas-hey', component: CuentasComponent, canActivate: [UtmsGuard] },
    // { path: 'parami/tdc', component: TarjetaDeCreditoComponent, canActivate: [UtmsGuard] },
    // { path: 'parami/coleccion', component: ColeccionComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/ahorro-hey', component: AhorroComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/seguros-hey', component: SegurosComponent, canActivate: [UtmsGuard] },
    // { path: 'seguros-auto-persona', component: SegurosAutoComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/seguros/apoyo-hospitalario', component: SegurosApoyoHospitalarioComponent, canActivate: [UtmsGuard] },
    // { path: 'seguros-proteccion-hey', component: ProteccionHeyComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/inversion', component: InversionComponent, canActivate: [UtmsGuard] },
    // { path: 'fondo-persona', component: FondoHeyComponent },
    // { path: 'recompensas', component: RecompensasComponent, canActivate: [UtmsGuard] },
    // { path: 'pagos/applepay', component: ApplepayComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/acciones', component: CapitalesComponent, canActivate: [UtmsGuard] },


    // inician paths nuevas urls

    // { path: 'personas/fondos-inversion', component: FondosInversionComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/fondos-inversion/corto-plazo', component: FondosInversionCortoPlazoComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/fondos-inversion/mediano-plazo', component: FondosInversionMedianoPlazoComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/fondos-inversion/largo-plazo', component: FondosInversionLargoPlazoComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/fondos-inversion/bolsa-mexicana', component: FondosBolsaMexicanaComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/fondos-inversion/dolares-americanos', component: FondosDolaresAmericanosComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/fondos-inversion/basico', component: BasicoComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/creditos/credito-auto', component: CreditoAutoComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/creditos/simulador-credito-auto', component: SimuladorAutoComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/creditos/personal', component: PersonasComponent, canActivate: [UtmsGuard] },
    // { path: 'personas/tdc/hazte-cliente', component: HazteClienteComponent, canActivate: [UtmsGuard] },

    { path: 'personas/tdc/hazte-cliente', component: PreOBDTarjetaCreditoComponent, canActivate: [UtmsGuard] },
    { path: 'personas/conoce-comercios', component: ConoceComerciosComponent, canActivate: [UtmsGuard] },
    { path: 'negocios/cuenta/pre-obd', component: PreOBDNegociosComponent, canActivate: [UtmsGuard]  },
    { path: 'negocios/tarjeta-hey-negocios', component: TarjetaHeyNegociosComponent, canActivate: [UtmsGuard] },


    // { path: 'creditos-persona', component: CreditosComponent },
    // { path: 'creditos-auto-persona', component: CreditosAutoComponent },

    // { path: 'home-negocio', component: ParaMiNegocioComponent },
    // { path: 'heypay/go', component: HeyPayGoComponent },
    // { path: 'seguros-negocio', component: NegocioSegurosComponent },
    // { path: 'seguros-auto-negocio', component: NegocioSegurosAutoComponent },
    // { path: 'seguros-drsam-negocio', component: NegocioSegurosDrsamComponent },

    // { path: 'empowerment', component: EmpowermentComponent },
    // { path: 'empowerment/stories', component: StoriesComponent },
    // { path: 'money-coach', component: MoneyCoachComponent },
    // { path: 'test-financiero', component: TestComponent, canActivate: [UtmsGuard] },
    // { path: 'test-financiero/interno', component: TestComponent, canActivate: [UtmsGuard] },
    //{ path: 'careers', component: CareersComponent, canActivate: [UtmsGuard] },
    //{ path: 'careers/jobs', component: JobsComponent, canActivate: [UtmsGuard] },
    //{ path: 'careers/jobs/:id', component: DetailComponent, canActivate: [UtmsGuard] },
    // { path: 'careers/form', component: FormComponent },
    // { path: 'careers/form/confirmation', component: ConfirmationComponent },
    // { path: 'personas/shop', component: ShopComponent, canActivate: [UtmsGuard] },
    // { path: 'ayuda', component: AyudaComponent },
    // { path: 'ayuda/articulo/:slug', component: ArticuloCompletoComponent },
    // { path: 'ayuda/busqueda', component: ResultadoDeBusquedaComponent },

    { path: 'centro-ayuda', component: CentroAyudaComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-app', component: CentroAyudaAppComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-cuenta', component: CentroAyudaCuentaComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-inversion', component: CentroAyudaInversionComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-tarjeta-credito', component: CentroAyudaTarjetaCreditoComponent, canActivate: [UtmsGuard] },
    // { path: 'centro-ayuda-creditos', component: CentroAyudaCreditosComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-creditos-auto', component: CentroAyudaCreditosAutoComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-ahorro', component: CentroAyudaAhorroComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda-seguros', component: CentroAyudaSegurosComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/seguros-auto', component: CentroAyudaSegurosAutoComponent, canActivate: [UtmsGuard] },
    // ------Artículos CAD
    { path: 'centro-ayuda/tarjeta-virtual', component: CentroAyudaTarjetaVirtualComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/recuperar-usuario', component: CentroAyudaRecuperarUsuarioComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/rastreo-tarjeta', component: CentroAyudaRastreoTarjetaComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/datos-personales', component: CentroAyudaDatosPersonalesComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/abrir-cuenta', component: CentroAyudaAbrirCuentaComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/movimientos-cuentas', component: CentroAyudaMovimientosCuentasComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/numero-cuenta', component: CentroAyudaNumeroCuentaComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/como-funciona-inversion', component: CentroAyudaInversionHeyComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/inversion-7', component: CentroAyudaInversion7Component, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/vigencia-inversion-7', component: CentroAyudaVigenciaInversion7Component, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/consulta-saldo-tarjeta-credito', component: CentroAyudaConsultaSaldoComponent, canActivate: [UtmsGuard] },
    { path: 'centro-ayuda/pagar-tarjeta-credito', component: CentroAyudaPagarTajetaCreditoComponent, canActivate: [UtmsGuard] },
    // tslint:disable-next-line:max-line-length
    { path: 'centro-ayuda/diferencia-deuda-corte-actual-credito-disponible', component: CentroAyudaDiferentesDeudasComponent,
    canActivate: [UtmsGuard] },
    // tslint:disable-next-line:max-line-length
    { path: 'centro-ayuda/diferencia-ahorro-inversion', component: CentroAyudaDiferenciaAhorroInversionComponent,
    canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/abonar-dinero-ahorro', component: CentroAyudaAbonarDineroAhorroComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/rendimiento-ahorro', component: CentroAyudaRendimientoAhorroComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/asegurar-auto', component: CentroAyudaAsegurarAutoComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/siniestro', component: CentroAyudaSiniestroComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/proteccion', component: CentroAyudaProteccionComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/reporte-accidente-auto', component: CentroAyudaReporteAccidenteAutoComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/seguro-moto', component: CentroAyudaSeguroMotoComponent, canActivate: [UtmsGuard]  },
    // tslint:disable-next-line:max-line-length
    { path: 'centro-ayuda/seguro-plataformas-digitales', component: CentroAyudaSeguroPlataformasDigitalesComponent,
    canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/version-auto', component: CentroAyudaVersionAutoComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/seguros-celular', component: CentroAyudaSegurosCelularComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/cotizar-seguro-celular', component: CentroAyudaCotizarSeguroCelularComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/consultar-imei', component: CentroAyudaConsultarIMEIComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/cobertura-celular', component: CentroAyudaCoberturaCelularComponent, canActivate: [UtmsGuard]  },
    // tslint:disable-next-line:max-line-length
    { path: 'centro-ayuda/seguro-apoyo-hospitalario-consulta-virtual', component: CentroAyudaConsultaVirtualComponent,
    canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/especialistas', component: CentroAyudaEspecialistasComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/medicamentos', component: CentroAyudaMedicamentosComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/aseguradora', component: CentroAyudaAseguradoraComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/videotutoriales', component: CentroAyudaVideotutorialesComponent, canActivate: [UtmsGuard]  },

    // ------Buscador

    { path: 'centro-ayuda/busqueda/:search', component: CentroAyudaResultadosComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/articulo/:id', component: CentroAyudaResultadoComponent, canActivate: [UtmsGuard]  },
    { path: 'link/products/complemento-expediente', component: VerificacionCuentaComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/ahorro-abrir', component: AhorroAbrirComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/ahorro-fecha-domiciliacion', component: AhorroFechaDomiciliacionComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/ahorro-retirar', component: AhorroRetirarComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/cuenta-clabe', component: CuentaClabeComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/cuenta-comisiones', component: CuentaComisionesComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/cuenta-info', component: CuentaInfoComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/cuenta-numero', component: CuentaNumeroComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/verificacion-cuenta', component: VerificacionCuentaComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/verificacion-documentos', component: VerificacionDocumentosComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/verificacion-limite', component: VerificacionLimiteComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/verificacion-reenvio-documentos', component: VerificacionReenvioDocumentosComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/verificacion-sin-realizar', component: VerificacionSinRealizarComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/verificacion-tutorial', component: VerificacionTutorialComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/tarjeta-de-credito-anualidad', component: TarjetaDeCreditoAnualidadComponent, canActivate: [UtmsGuard]  },
    //{ path: 'centro-ayuda/tarjeta-de-credito-info', component: TarjetaDeCreditoInfoComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/tarjeta-de-credito-limite', component: TarjetaDeCreditoLimiteComponent, canActivate: [UtmsGuard]  },
    //{ path: 'centro-ayuda/tarjeta-de-credito-pago', component: TarjetaDeCreditoPagoComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda/tarjeta-de-credito-solicitar', component: TarjetaDeCreditoSolicitarComponent, canActivate: [UtmsGuard]  },

    // ------CAD Negocios
    { path: 'centro-ayuda-negocios', component: CentroAyudaNegociosComponent, canActivate: [UtmsGuard]  },
    { path: 'centro-ayuda-negocios/busqueda/:search', component: CentroAyudaNegociosResultadosComponent, canActivate: [UtmsGuard]  },
    // { path: 'centro-ayuda-negocios/resultados', component: CentroAyudaNegociosResultadosComponent },

    // { path: 'solicitud-rollos', component: CentroAyudaNegociosSolicitudRollosComponent, canActivate: [UtmsGuard]  },
    // { path: 'solicitud-publicidad', component: CentroAyudaNegociosSolicitudPublicidadComponent, canActivate: [UtmsGuard]  },
    // { path: 'solicitud-mantenimiento', component: CentroAyudaNegociosMantenimientoComponent, canActivate: [UtmsGuard] },
    // { path: 'solicitud-capacitacion', component: CentroAyudaNegociosCapacitacionComponent, canActivate: [UtmsGuard] },


    { path: 'aviso-privacidad', component: PrivacidadComponent, canActivate: [UtmsGuard] },
    { path: 'aviso-legal', component: LegalComponent, canActivate: [UtmsGuard] },
    { path: 'transparencia', component: TransparenciaComponent, canActivate: [UtmsGuard] },
    { path: 'condusef', component: CondusefComponent, canActivate: [UtmsGuard] },
    { path: 'ipab', component: IpabComponent, canActivate: [UtmsGuard] },


    { path: 'promos', component: PromosComponent, canActivate: [UtmsGuard] },
    // { path: 'ahorro', component: AhorroComponent, canActivate: [UtmsGuard] },

    // ------Giveaways
    { path: 'promos/giveaways', component: GiveawaysComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-diario', component: GiveawayDiarioComponent, canActivate: [UtmsGuard] },
    { path: 'promos/giveaway-nomina', component: GiveawayNominaComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-ahorro', compy no tenemos una con queonent: GiveawayAhorroComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-ahorro', component: GiveawayAhorroComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-amigos', component: GiveawayAmigosComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-tip-financiero', component: GiveawayTipFinancieroComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-estudiantes', component: GiveawayEstudiantesComponent },
    // { path: 'promos/giveaway-participacion/:codigo', component: GiveawayParticipacionComponent, canActivate: [UtmsGuard] },
    { path: 'promos/giveaway-participacion-nomina/:codigo', component: GiveawayParticipacionNominaComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-participacion-ahorro/:codigo', component: GiveawayParticipacionAhorroComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-participacion-reembolso', component: GiveawayParticipacionRembolsoComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-reembolso', component: GiveawayReembolsoComponent, canActivate: [UtmsGuard] },
    { path: 'promos/giveaway-participacion-referidos', component: GiveawayParticipacionReferidosComponent, canActivate: [UtmsGuard] },
    // tslint:disable-next-line:max-line-length
    { path: 'promos/giveaway-participacion-referidos/:codigo', component: GiveawayParticipacionReferidosComponent,
    canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-buen-fin', component: GiveawayBuenFinComponent },
    // { path: 'promos/giveaway-participacion-buen-fin', component: GiveawayParticipacionBuenFinComponent },
     { path: 'promos/giveaway-participacion-nps/:codigo', component: GiveawayParticipacionNpsComponent, canActivate: [UtmsGuard]  },
    // { path: 'promos/giveaway-buen-fin', component: GiveawayBuenFinComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-participacion-buen-fin', component: GiveawayParticipacionBuenFinComponent, canActivate: [UtmsGuard] },
    { path: 'promos/giveaway-participacion-nps/:codigo', component: GiveawayParticipacionNpsComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/giveaway-proteccion-hey/:codigo', component: GiveawayProteccionHeyComponent, canActivate: [UtmsGuard] },
    { path: 'promos/giveaway-transferencia-saldos/:codigo', component: PromocionalTranferenciaSaldosComponent, canActivate: [UtmsGuard] },
    { path: 'promos/referidos', component: PromocionalEmbajadoresComponent, canActivate: [UtmsGuard] },
    { path: 'promos/boleto-dorado-informativa', component: BoletoDoradoInformativoComponent, canActivate: [UtmsGuard] },
    { path: 'promos/boleto-dorado/:codigo', component: BoletoDoradoComponent, canActivate: [UtmsGuard] },
    { path: 'promos/boleto-dorado-premiados/:codigo', component: GoldenTicketComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/embajadores-clientes-hey', component: EmbajadoresClientesComponent, canActivate: [UtmsGuard] },
    // { path: 'promos/participacion-tarjetas-hey', component: GiveawayTarjetasComponent, canActivate: [UtmsGuard] },
    // {
    //     path: 'promos/giveaway-participacion-referidos-hey/:codigo',
    //     component: GiveawayParticipacionReferidosHeyComponent, canActivate: [UtmsGuard]
    // },
    // { path: 'promos/giveaway-hey-menores/:codigo', component: GiveawayMenoresComponent, canActivate: [UtmsGuard] },
    { path: 'promos/difiere-compras/:codigo', component: GiveawayDifiereComponent, canActivate: [UtmsGuard] },
    { path: 'promos/difiere-compras-hey-pro/:codigo', component: DifiereComprasHeyProComponent, canActivate: [UtmsGuard] },
    { path: 'promos/giveaway-participacion-medalia/:codigo', component: GiveawayMedaliaComponent, canActivate: [UtmsGuard] },
    { path: 'promos/giveaway-catar/:codigo', component: GiveawayCatarInteresComponent, canActivate: [UtmsGuard] },
    { path: 'promos/giveaway-ahorro', component: GiveawayAhorroCategoriasComponent, canActivate: [UtmsGuard] },


    //{ path: 'nosotros', component: AboutComponent, canActivate: [UtmsGuard] },
    //{ path: 'nosotros/manuel-rivero', component: ManuelComponent, canActivate: [UtmsGuard] },
    { path: 'corresponsales', component: CorresponsalesComponent, canActivate: [UtmsGuard] },
    // { path: 'alianzas', component: AlianzasComponent },
    { path: 'reportes', component: IvrComponent, canActivate: [UtmsGuard] },
    { path: 'ayuda-negocios', component: InicioCentroAyudaNegociosComponent, canActivate: [UtmsGuard] },
    // { path: 'reporte/aclaracion', component: IvrAclaracionComponent },
    // { path: 'reportes/cambio-curp-rfc', component: IvrCambioComponent },
    // { path: 'reportes/cambio-domicilio-telefono-correo', component: IvrContactoComponent },
    // { path: 'reportes/desbloqueo-cuenta', component: IvrDesbloqueoComponent },
    { path: 'reportes/reporte-fallas-app', component: IvrFallasComponent, canActivate: [UtmsGuard]},
    { path: 'reportes/asesoria-producto', component: IvrProductoComponent, canActivate: [UtmsGuard]  },
    // { path: 'reportes/rastreo-plastico', component: IvrSolicitudComponent },
    { path: 'reportes/sugerencias-mejora', component: IvrSugerenciaComponent, canActivate: [UtmsGuard] },
    { path: 'bienvenida-hey-banco', component: BienvenidaHeyBancoComponent, canActivate: [UtmsGuard]  },
    { path: 'negocios/bienvenida/hey-banco', component: BienvenidaNegociosHeyComponent, canActivate: [UtmsGuard]  },


    // { path: 'hey-media', component: BlogComponent, canActivate: [UtmsGuard]  },
    // { path: 'hey-media/articulo/:clave', component: ArticuloComponent, canActivate: [UtmsGuard]  },
    // { path: 'hey-media/:clave', component: BlogComponent, canActivate: [UtmsGuard]  },

    { path: '404', component: Error404Component, canActivate: [UtmsGuard]   },
    // --nuevo home
    // { path: 'parami/home', component: HomeComponent, canActivate: [UtmsGuard] },
    // Legales

    { path: 'sidebar-legales', component: SidebarLegalesComponent, canActivate: [UtmsGuard] },
    { path: 'servicios-legales', component: ServiciosLegalesComponent, canActivate: [UtmsGuard] },
    { path: 'terminos-condiciones', component: TerminosCondicionesComponent, canActivate: [UtmsGuard] },
    { path: 'terminos-condiciones/beneficios', component: BeneficiosComponent, canActivate: [UtmsGuard] },
    { path: 'terminos-condiciones/promociones', component: PromocionesComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos', component: FolletosInformativosComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos/cuentas-hey', component: CuentasHeyComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos/fondos-inversion', component: FondosInversionLegalesComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/basico', component: FondoBasicoComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/corto-plazo', component: FondoCortoPlazoComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/mediano-plazo', component: FondoMedianoPlazoComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/largo-plazo', component: FondoLargoPlazoComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/bolsa-mexicana', component: FondoBolsaMexicanaComponent, canActivate: [UtmsGuard] },
    { path: 'fondos-inversion/dolares-americanos', component: FondoDolaresAmericanosComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos', component: ContratoProductosComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos/tarjeta-credito', component: TarjetaCreditoComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos/hey-cuentas', component: CuentasHeyProductosComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos/inversion-fondos', component: InversionFondosInversionComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos/inversion-fondos/prospectos', component: FondosInversionProspectosComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos/inversion-fondos/caratula-servicios-inversion', component: FondosInversionCaratulaComponent,
    canActivate: [UtmsGuard] },
    { path: 'folletos-informativos-negocios', component: FolletosInformativosNegociosComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos-negocios/cuentas-hey-negocios', component: CuentasHeyNegocioComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos-negocios/creditos-hey-negocios', component: CreditosHeyNegocioComponent, canActivate: [UtmsGuard] },
    { path: 'folletos-informativos-negocios/terminal-inteligente', component: TerminalInteligenteComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos-negocios', component: ContratoProductosNegociosComponent, canActivate: [UtmsGuard] },
    { path: 'contratos-productos-negocios/cuentas-hey-contratos', component: ContratoProductosCuentasHeyComponent,
     canActivate: [UtmsGuard] },
    { path: 'contratos-productos-negocios/credito-contratos', component: ContratoCreditoHeyComponent, canActivate: [UtmsGuard] },


    { path: '**', pathMatch: 'full', redirectTo: ''  }

];*/
