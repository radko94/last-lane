import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityNewPostComponent } from './community-new-post.component';

describe('CommunityNewPostComponent', () => {
  let component: CommunityNewPostComponent;
  let fixture: ComponentFixture<CommunityNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityNewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
