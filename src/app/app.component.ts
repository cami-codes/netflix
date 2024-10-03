import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'netflix';
  options = ['Original Language', 'Dubbing', 'Subtitles'];
  selectedOption = 'Original Language';

  getSelectedOption(option: string) {
    console.log(option);
  }
}
