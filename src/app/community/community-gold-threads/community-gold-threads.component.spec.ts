import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityGoldThreadsComponent } from './community-gold-threads.component';

describe('CommunityGoldThreadsComponent', () => {
  let component: CommunityGoldThreadsComponent;
  let fixture: ComponentFixture<CommunityGoldThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityGoldThreadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityGoldThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
