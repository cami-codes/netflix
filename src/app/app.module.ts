import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { IconComponent } from './shared/components/icon/icon.component';
import { InputComponent } from './shared/components/input/input.component';
import { MaturityRatingComponent } from './shared/components/maturity-rating/maturity-rating.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownComponent,
    InputComponent,
    IconComponent,
    MaturityRatingComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
