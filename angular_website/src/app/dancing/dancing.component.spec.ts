import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DancingComponent } from './dancing.component';

describe('DancingComponent', () => {
  let component: DancingComponent;
  let fixture: ComponentFixture<DancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DancingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
