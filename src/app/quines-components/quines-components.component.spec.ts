import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuinesComponentsComponent } from './quines-components.component';

describe('QuinesComponentsComponent', () => {
  let component: QuinesComponentsComponent;
  let fixture: ComponentFixture<QuinesComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuinesComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuinesComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
