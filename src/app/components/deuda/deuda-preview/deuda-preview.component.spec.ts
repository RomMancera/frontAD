import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudaPreviewComponent } from './deuda-preview.component';

describe('DeudaPreviewComponent', () => {
  let component: DeudaPreviewComponent;
  let fixture: ComponentFixture<DeudaPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeudaPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeudaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
