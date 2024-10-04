import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomrComponent } from './components/homr/homr.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'work-angular_fe';
}
