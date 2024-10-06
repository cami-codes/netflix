import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [CommonModule, IconComponent],
})
export class ButtonComponent {
  @Input() public text: string = '';
  @Input() public color: 'red' | 'gray' | 'black' | 'white' | 'info' = 'red';
  @Input() public icon: string = '';
  @Input() public iconColor: string = 'white';
  @Input() public checkbox: boolean = false;
  @Input() public size: 'small' | 'large' = 'large';
}
