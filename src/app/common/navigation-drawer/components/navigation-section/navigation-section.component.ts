import { Component, Input, OnInit } from '@angular/core';
import INavigationSection from '@navigationDrawer/interfaces/navigation-section.interface';

@Component({
  selector: 'app-navigation-section',
  templateUrl: './navigation-section.component.html',
  styleUrls: ['./navigation-section.component.scss'],
})
export class NavigationSectionComponent implements OnInit {
  @Input()
  public navigationSection: INavigationSection;

  constructor() {}

  ngOnInit(): void {}
}
