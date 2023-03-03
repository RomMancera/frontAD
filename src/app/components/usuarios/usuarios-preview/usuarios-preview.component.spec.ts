import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosPreviewComponent } from './usuarios-preview.component';

describe('UsuariosPreviewComponent', () => {
  let component: UsuariosPreviewComponent;
  let fixture: ComponentFixture<UsuariosPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosPreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
