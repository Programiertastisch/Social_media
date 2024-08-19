import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProfilComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'socialmedia';
}
