import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminRoleDirective } from './directives/admin-role.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AdminRoleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'work-angular_fe';
}
