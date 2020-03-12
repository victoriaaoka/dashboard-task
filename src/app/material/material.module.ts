import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


const material = [
  MatToolbarModule,
  MatBadgeModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatChipsModule,
  MatTableModule,
  MatPaginatorModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
