import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMyComponent } from './info-my.component';

describe('InfoMyComponent', () => {
  let component: InfoMyComponent;
  let fixture: ComponentFixture<InfoMyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMyComponent]
    });
    fixture = TestBed.createComponent(InfoMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
