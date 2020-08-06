import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsContainerComponent } from './tweets-container.component';

describe('TweetsContainerComponent', () => {
  let component: TweetsContainerComponent;
  let fixture: ComponentFixture<TweetsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
