import { DireccionModel } from './direccion.model';

export interface ComercioModel {
    id: number;
    nombre: string;
    giro: string;
    direccion: DireccionModel;
}
