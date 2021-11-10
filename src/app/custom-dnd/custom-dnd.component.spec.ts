import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDndComponent } from './custom-dnd.component';

describe('CustomDndComponent', () => {
  let component: CustomDndComponent;
  let fixture: ComponentFixture<CustomDndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
