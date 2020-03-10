import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';


const material = [
  MatToolbarModule,
  MatBadgeModule,
  MatIconModule,
  MatSelectModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
