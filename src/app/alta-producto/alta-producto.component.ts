import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.css'
})
export class AltaProductoComponent {
  precio: number = 0;
  stock: number = 0;
  mensaje: string = '';

  ingresarProducto(): void {
    if (this.precio > 0 && this.stock > 0) {
      this.mensaje = 'Producto dado de alta.';
    } else {
      this.mensaje = 'Los precios y el stock deben ser mayores que cero.';
    }
  }
}
