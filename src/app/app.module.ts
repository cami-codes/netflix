import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { IconComponent } from './shared/components/icon/icon.component';
import { InputComponent } from './shared/components/input/input.component';
import { LabelComponent } from './shared/components/label/label.component';
import { MaturityRatingComponent } from './shared/components/maturity-rating/maturity-rating.component';
import { VideoQualityComponent } from './shared/components/video-quality/video-quality.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownComponent,
    InputComponent,
    IconComponent,
    MaturityRatingComponent,
    VideoQualityComponent,
    LabelComponent,
    ButtonComponent,
    CheckboxComponent,
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
