import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationDrawerComponent } from './navigation-drawer.component';
import { NavigationDrawerMaterialModule } from './navigation-drawer-material.module';
import { NavigationSectionComponent } from './components/navigation-section/navigation-section.component';

@NgModule({
  declarations: [NavigationDrawerComponent, NavigationSectionComponent],
  imports: [CommonModule, NavigationDrawerMaterialModule],
  exports: [NavigationDrawerComponent],
})
export class NavigationDrawerModule {}
