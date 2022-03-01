import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeleteDataComponent } from './add-delete-data.component';

describe('AddDeleteDataComponent', () => {
  let component: AddDeleteDataComponent;
  let fixture: ComponentFixture<AddDeleteDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeleteDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeleteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
