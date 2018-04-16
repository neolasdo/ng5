import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderFrontendComponent } from './app-header-frontend.component';

describe('AppHeaderFrontendComponent', () => {
  let component: AppHeaderFrontendComponent;
  let fixture: ComponentFixture<AppHeaderFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
