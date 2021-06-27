import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  exports: [MatTabsModule, MatIconModule],
})
export class CommunityMaterialModule {}
