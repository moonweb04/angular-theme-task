import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineExampleComponent } from './combine-example.component';

describe('CombineExampleComponent', () => {
  let component: CombineExampleComponent;
  let fixture: ComponentFixture<CombineExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
