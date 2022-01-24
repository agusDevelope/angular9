import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursGitComponent } from './cours-git.component';

describe('CoursGitComponent', () => {
  let component: CoursGitComponent;
  let fixture: ComponentFixture<CoursGitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursGitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursGitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
