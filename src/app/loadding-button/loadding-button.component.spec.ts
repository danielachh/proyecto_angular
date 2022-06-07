import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaddingButtonComponent } from './loadding-button.component';

describe('LoaddingButtonComponent', () => {
  let component: LoaddingButtonComponent;
  let fixture: ComponentFixture<LoaddingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaddingButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaddingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
