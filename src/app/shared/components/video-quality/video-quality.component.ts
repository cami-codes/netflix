import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-quality',
  templateUrl: './video-quality.component.html',
  styleUrls: ['./video-quality.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class VideoQualityComponent {
  @Input() quality!: string;
}
