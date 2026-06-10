import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartClassroom } from './smart-classroom';

describe('SmartClassroom', () => {
  let component: SmartClassroom;
  let fixture: ComponentFixture<SmartClassroom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartClassroom],
    }).compileComponents();

    fixture = TestBed.createComponent(SmartClassroom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
