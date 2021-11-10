import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEgComponent } from './child-eg.component';

describe('ChildEgComponent', () => {
  let component: ChildEgComponent;
  let fixture: ComponentFixture<ChildEgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildEgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
