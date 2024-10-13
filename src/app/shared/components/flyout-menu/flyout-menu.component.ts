import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-flyout-menu',
  templateUrl: './flyout-menu.component.html',
  styleUrls: ['./flyout-menu.component.scss'],
  standalone: true,
  imports: [CommonModule, IconComponent],
})
export class FlyoutMenuComponent {
  @Input() public profiles!: { icon: string[]; name: string[] };
  @Input() public selectedProfileIcon!: string;
  @Input() public actions!: { icon: string[]; label: string[] };
  public isMenuOpen = false;
}
