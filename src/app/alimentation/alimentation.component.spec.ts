import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentationComponent } from './alimentation.component';

describe('AlimentationComponent', () => {
  let component: AlimentationComponent;
  let fixture: ComponentFixture<AlimentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
