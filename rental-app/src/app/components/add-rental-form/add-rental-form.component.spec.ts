import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentalFormComponent } from './add-rental-form.component';

describe('AddRentalFormComponent', () => {
  let component: AddRentalFormComponent;
  let fixture: ComponentFixture<AddRentalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRentalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRentalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
