import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class IconComponent implements OnInit {
  @Input() name: string = '';
  @Input() width: string = '24px';
  @Input() height: string = '24px';
  @Input() color!: string;

  public iconPath: string = '';

  ngOnInit(): void {
    this.iconPath = `assets/icons/${this.name}.svg`;
  }
}
