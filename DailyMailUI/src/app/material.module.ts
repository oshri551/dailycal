import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatSlideToggleModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [
    MatToolbarModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: []
})
export class MaterialModule { }
