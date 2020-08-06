import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GloboIconComponent } from './globo-icon.component';

describe('GloboIconComponent', () => {
  let component: GloboIconComponent;
  let fixture: ComponentFixture<GloboIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GloboIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GloboIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
