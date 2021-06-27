import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ECommunityNavigation } from './models/community-navigartion.enum';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  public navigations: typeof ECommunityNavigation;

  public constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.navigations = ECommunityNavigation;
  }

  public navigateTo(path: string): void {
    console.log(path)
    this._router.navigate([path], { relativeTo: this._activatedRoute });
  }
}
