import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  private drawer!: MatDrawer;
  // @ViewChild('drawer')
  // public drawer!: MatDrawer;

  public constructor() {}

  ngAfterViewInit(): void {
    console.log(this.drawer)
  }

  public setDrawerInstance(instance: MatDrawer): void {
    this.drawer = instance;
  }

  public toggleDrawer(): void {
    // console.log(this.drawer)
    this.drawer.toggle();
  }
}
