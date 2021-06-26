import { Component } from '@angular/core';
import { toggleDrawerAction } from '@common-store-actions/shared.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public constructor(private readonly _store: Store) {}

  public toggleDrawerEvent(): void {
    this._store.dispatch(toggleDrawerAction());
  }
}
