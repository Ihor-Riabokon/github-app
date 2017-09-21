import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoinfoComponent } from './repoinfo.component';

describe('RepoinfoComponent', () => {
  let component: RepoinfoComponent;
  let fixture: ComponentFixture<RepoinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
