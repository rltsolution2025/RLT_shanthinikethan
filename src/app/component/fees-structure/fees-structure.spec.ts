import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesStructure } from './fees-structure';

describe('FeesStructure', () => {
  let component: FeesStructure;
  let fixture: ComponentFixture<FeesStructure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeesStructure],
    }).compileComponents();

    fixture = TestBed.createComponent(FeesStructure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
