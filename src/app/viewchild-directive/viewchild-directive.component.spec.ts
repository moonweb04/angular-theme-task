import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildDirectiveComponent } from './viewchild-directive.component';

describe('ViewchildDirectiveComponent', () => {
  let component: ViewchildDirectiveComponent;
  let fixture: ComponentFixture<ViewchildDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewchildDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
