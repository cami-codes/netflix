import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maturity-rating',
  templateUrl: './maturity-rating.component.html',
  styleUrls: ['./maturity-rating.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class MaturityRatingComponent {
  @Input() rating!: string;
}
