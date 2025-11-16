import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabNgForComponent } from './tab-ng-for.component';

describe('TabNgForComponent', () => {
  let component: TabNgForComponent;
  let fixture: ComponentFixture<TabNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
