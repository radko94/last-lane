import { Component, Input, OnInit } from '@angular/core';

import { INavigation } from '@community/community-home/interfaces';

@Component({
  selector: 'app-fast-navigation-list',
  templateUrl: './fast-navigation-list.component.html',
  styleUrls: ['./fast-navigation-list.component.scss'],
})
export class FastNavigationListComponent implements OnInit {
  @Input()
  public header: string;

  @Input()
  public navigations: INavigation[];

  constructor() {}

  ngOnInit(): void {}
}
