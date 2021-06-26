import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

import { Actions, ofType } from '@ngrx/effects';

import {
  MatDrawer,
  MatDrawerMode,
  MatDrawerToggleResult,
} from '@angular/material/sidenav';

import { toggleDrawerAction } from '@common-store-actions/shared.actions';

@Component({
  selector: 'app-navigation-drawer',
  templateUrl: './navigation-drawer.component.html',
  styleUrls: ['./navigation-drawer.component.scss'],
})
export class NavigationDrawerComponent implements OnInit, AfterViewInit {
  public hasBackdrop: boolean;
  public drawerMode: MatDrawerMode;
  public toggleDrawler: Observable<MatDrawerToggleResult>;

  @ViewChild(MatDrawer)
  public drawer: MatDrawer;

  public constructor(private readonly _actions$: Actions) {}

  public ngOnInit(): void {
    this.hasBackdrop = true;
    this.drawerMode = 'side';
  }

  public ngAfterViewInit(): void {
    this.toggleDrawler = this._actions$.pipe(
      ofType<ReturnType<typeof toggleDrawerAction>>(toggleDrawerAction),
      switchMap(() => from(this.drawer.toggle()))
    );
  }
}
