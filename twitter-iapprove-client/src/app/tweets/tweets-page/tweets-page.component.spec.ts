import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsPageComponent } from './tweets-page.component';

describe('TweetsPageComponent', () => {
  let component: TweetsPageComponent;
  let fixture: ComponentFixture<TweetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
