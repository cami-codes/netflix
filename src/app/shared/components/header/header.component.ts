import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, IconComponent, DropdownComponent, ButtonComponent],
})
export class HeaderComponent {
  @Input() public type!: 'landing' | 'home';
  @Input() public profileIcon!: string;
  public options = ['English', 'Portuguese', 'Spanish'];
  public selectedOption = 'English';
}
