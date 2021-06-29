import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastNavigationListComponent } from './fast-navigation-list.component';

describe('FastNavigationListComponent', () => {
  let component: FastNavigationListComponent;
  let fixture: ComponentFixture<FastNavigationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastNavigationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastNavigationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
