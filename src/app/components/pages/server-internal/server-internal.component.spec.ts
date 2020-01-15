import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerInternalComponent } from './server-internal.component';

describe('ServerInternalComponent', () => {
  let component: ServerInternalComponent;
  let fixture: ComponentFixture<ServerInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
