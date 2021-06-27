import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityNotableThreadsComponent } from './community-notable-threads.component';

describe('CommunityNotableThreadsComponent', () => {
  let component: CommunityNotableThreadsComponent;
  let fixture: ComponentFixture<CommunityNotableThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityNotableThreadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityNotableThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
