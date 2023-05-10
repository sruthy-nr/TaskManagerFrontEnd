import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavigationComponent } from '../navigation/navigation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiService } from '../api.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';


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

  it('should update the page number and call the view method', () => {
    spyOn(component, 'ngOnInit');

    component.pageChangeEvent(2);

    expect(component.p).toEqual(2);
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should retrieve and display a list of tasks from the API', () => {
    // Arrange
    const mockTasks = [      { id: 1, name: 'Task 1'},      { id: 2, name: 'Task 2'},      { id: 3, name: 'Task 3'}    ];
    const apiService = TestBed.inject(ApiService);
    const router = TestBed.inject(Router);
    spyOn(apiService, 'viewTask').and.returnValue(of({ taskList: mockTasks }));
    // const component = new TaskComponent(apiService,router);
    
    // Act
    component.ngOnInit();
    
    // Assert1
    expect(apiService.viewTask).toHaveBeenCalled();
    expect(component.tasks).toEqual(mockTasks);
  });

  it('should delete the task from the API and reload the page if the deletion is successful', () => {
    // Arrange
    const mockId = 1;
    const apiService = TestBed.inject(ApiService);
    const router = TestBed.inject(Router);

    spyOn(apiService, 'deleteTask').and.returnValue(of({ status: 'success' }));
    const component = new TaskComponent(apiService,router);
    component.id = mockId;
    
    // Act
    component.deletebuttonclick();
    
    // Assert
    expect(apiService.deleteTask).toHaveBeenCalledWith({ id: mockId });
  });

  
  it('should set the ID and name properties of the component', () => {
    // Arrange
    const mockId = 1;
    const mockName = 'Task 1';
    const apiService = TestBed.inject(ApiService);
    const router = TestBed.inject(Router);
    const component = new TaskComponent(apiService,router);
    
    // Act
    component.changeId(mockId, mockName);
    
    // Assert
    expect(component.id).toEqual(mockId);
    expect(component.name).toEqual(mockName);
  });
  
});

