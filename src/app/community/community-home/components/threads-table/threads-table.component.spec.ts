import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadsTableComponent } from './threads-table.component';

describe('ThreadsTableComponent', () => {
  let component: ThreadsTableComponent;
  let fixture: ComponentFixture<ThreadsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
