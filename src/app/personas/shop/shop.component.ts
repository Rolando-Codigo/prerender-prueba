import { Component } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { HeyShopService } from 'src/app/services/hey-shop.service';
import { environment } from '../../../environments/environment';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hey-shop',
  templateUrl: './shop.component.html'
})
export class ShopComponent {

  environment = environment;
  productos: ProductoInterface[] = [
    {
      titulo: 'Pantalla TV SONY49\'\' KD-49X700E',
      precio: '14,864',
      precioAntes: 17865,
      msi: 12,
      msiCantidad: 1238.67,
      envioGratis: true,
      enlace: 'https://heyshop.com/producto/pantalla-tv-sony-kd-49x700e-49-pulgadas-smart/',
      image: 'https://heybanco.s3.amazonaws.com/assets/img/P400-Hey-Shop/P400-1-img.png',
      porcentajeDescuento: null
    },
    {
      titulo: 'Consola Nintendo Switch Mario Kart Deluxe + Membresía / negr',
      precio: '13,250',
      precioAntes: 14575,
      msi: 12,
      msiCantidad: 1104.17,
      envioGratis: true,
      enlace: 'https://heyshop.com/producto/consola-nintendo-switch-mario-kart-deluxe-membresia-negro/',
      image: 'https://heybanco.s3.amazonaws.com/assets/img/P400-Hey-Shop/P400-2-img.png',
      porcentajeDescuento: null
    },
    {
      titulo: 'Freidora de Aire Ninja AF101, 1500W, negro',
      precio: '3690.00',
      precioAntes: 4059.00,
      msi: 12,
      msiCantidad: 307.50,
      envioGratis: true,
      enlace: 'https://heyshop.com/producto/freidora-de-aire-ninja-af101-de-ceramica-1500w-negro-gris/',
      image: 'https://heybanco.s3.amazonaws.com/assets/img/P400-Hey-Shop/P400-3-img.png',
      porcentajeDescuento: null
    },
    {
      titulo: 'Laptop Apple MackBook Pro 8GB, 512GB, SSD',
      precio: '40970.00',
      precioAntes: 45067.00,
      msi: 12,
      msiCantidad: 3414.17,
      envioGratis: true,
      enlace: 'https://heyshop.com/producto/computadora-de-escritorio-apple-macbook-pro-8gb-512gb-ssd/',
      image: 'https://heybanco.s3.amazonaws.com/assets/img/P400-Hey-Shop/P400-4-img.png',
      porcentajeDescuento: null
    },
  ];
  constructor(
    private heyShopService: HeyShopService,
  ) { }


}

export interface ProductoInterface {
  titulo: string;
  precio: string;
  enlace: string;
  msi: number;
  msiCantidad: number;
  porcentajeDescuento: string;
  precioAntes: number;
  envioGratis: boolean;
  image: string;
}
