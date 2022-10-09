import { ArticuloInterface } from './articulos.model';
export interface CategoriasInterface {
    id: string;
    categoria: string;
    published_at: Date;
    created_at: Date;
    articulos: ArticuloInterface[];
}
