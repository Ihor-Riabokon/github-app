import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitlistComponent } from './commitlist.component';

describe('CommitlistComponent', () => {
  let component: CommitlistComponent;
  let fixture: ComponentFixture<CommitlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
