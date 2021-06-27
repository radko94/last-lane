import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityHotTopicsComponent } from './community-hot-topics.component';

describe('CommunityHotTopicsComponent', () => {
  let component: CommunityHotTopicsComponent;
  let fixture: ComponentFixture<CommunityHotTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityHotTopicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityHotTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
