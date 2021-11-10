import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveInputWarningComponent } from './directive-input-warning.component';

describe('DirectiveInputWarningComponent', () => {
  let component: DirectiveInputWarningComponent;
  let fixture: ComponentFixture<DirectiveInputWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveInputWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveInputWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
