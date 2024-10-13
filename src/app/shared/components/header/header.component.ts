import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';
import { FlyoutMenuComponent } from '../flyout-menu/flyout-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    DropdownComponent,
    ButtonComponent,
    FlyoutMenuComponent,
  ],
})
export class HeaderComponent {
  @Input() public type!: 'landing' | 'home';
  @Input() public profileIcon!: string;
  public options = ['English', 'Portuguese', 'Spanish'];
  public selectedOption = 'English';
  public profiles = {
    icon: ['03', '04'],
    name: ['Person 1', 'Person 2'],
  };
  public actions = {
    icon: ['pencil', 'account', 'person', 'question'],
    label: ['Manage Profiles', 'Transfer Profiles', 'Account', 'Help Center'],
  };
}
