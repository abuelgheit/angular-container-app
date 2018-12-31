import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TortogaComponent } from './tortoga.component';

describe('TortogaComponent', () => {
  let component: TortogaComponent;
  let fixture: ComponentFixture<TortogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TortogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TortogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
