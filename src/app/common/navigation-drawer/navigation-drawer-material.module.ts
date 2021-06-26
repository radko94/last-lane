import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  exports: [MatSidenavModule, MatIconModule, MatButtonModule, MatDividerModule],
})
export class NavigationDrawerMaterialModule {}
