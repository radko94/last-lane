import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationDrawerComponent } from './navigation-drawer.component';
import { NavigationDrawerMaterialModule } from './navigation-drawer-material.module';

@NgModule({
  declarations: [NavigationDrawerComponent],
  imports: [CommonModule, NavigationDrawerMaterialModule],
  exports: [NavigationDrawerComponent],
})
export class NavigationDrawerModule {}
