import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityActiveThreadsComponent } from './community-active-threads.component';

describe('CommunityActiveThreadsComponent', () => {
  let component: CommunityActiveThreadsComponent;
  let fixture: ComponentFixture<CommunityActiveThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityActiveThreadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityActiveThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
