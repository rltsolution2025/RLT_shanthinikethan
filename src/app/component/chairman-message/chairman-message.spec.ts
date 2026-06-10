import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanMessage } from './chairman-message';

describe('ChairmanMessage', () => {
  let component: ChairmanMessage;
  let fixture: ComponentFixture<ChairmanMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChairmanMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(ChairmanMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
