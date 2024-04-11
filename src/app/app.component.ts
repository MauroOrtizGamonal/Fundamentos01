import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ts01Component } from './ts01/ts01.component';
import { Angular01Component } from './angular01/angular01.component';
import { RegistroComponent } from './registro/registro.component';
import { AltaProductoComponent } from './alta-producto/alta-producto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ts01Component,Angular01Component,RegistroComponent,AltaProductoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fundamentos01';
}
