import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-video-quality',
  templateUrl: './video-quality.component.html',
  styleUrls: ['./video-quality.component.scss'],
  standalone: true,
  imports: [CommonModule, IconComponent],
})
export class VideoQualityComponent {
  @Input() quality!: string;
}
