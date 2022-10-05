import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestUsuarioComponent } from './request-usuario.component';

describe('RequestUsuarioComponent', () => {
  let component: RequestUsuarioComponent;
  let fixture: ComponentFixture<RequestUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
