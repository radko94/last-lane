import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityMostLikedPostsComponent } from './community-most-liked-posts.component';

describe('CommunityMostLikedPostsComponent', () => {
  let component: CommunityMostLikedPostsComponent;
  let fixture: ComponentFixture<CommunityMostLikedPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityMostLikedPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityMostLikedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
