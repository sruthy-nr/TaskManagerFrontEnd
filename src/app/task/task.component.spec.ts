import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavigationComponent } from '../navigation/navigation.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,NgxPaginationModule],
      declarations: [ TaskComponent,NavigationComponent,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
