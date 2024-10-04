import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  standalone: true,
  imports: [CommonModule, IconComponent],
})
export class LabelComponent implements OnInit {
  @Input({ required: true }) type!: 'icon' | 'label';
  @Input() title: string = '';
  @Input() label: string = '';

  ngOnInit() {
    console.log('Label:', this.label);
  }
}
