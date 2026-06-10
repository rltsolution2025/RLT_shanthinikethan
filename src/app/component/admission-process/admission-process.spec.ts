import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionProcess } from './admission-process';

describe('AdmissionProcess', () => {
  let component: AdmissionProcess;
  let fixture: ComponentFixture<AdmissionProcess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmissionProcess],
    }).compileComponents();

    fixture = TestBed.createComponent(AdmissionProcess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
