import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesCategoryPickerComponent } from './nodes-category-picker.component';

describe('NodesCategoryPickerComponent', () => {
  let component: NodesCategoryPickerComponent;
  let fixture: ComponentFixture<NodesCategoryPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodesCategoryPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesCategoryPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
