import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Task } from '../Task';
import { TaskRepository } from '../repositories/task.repository';
import { Config } from '../config';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private config = new Config();

  constructor(private taskRepo: TaskRepository) {}

  getTasks(): Observable<Task[]> {
    return this.taskRepo.getAllTasks().pipe(catchError(this.handleError));
  }

  deleteTask(task: Task): Observable<void> {
    return this.taskRepo.deleteTask(task).pipe(catchError(this.handleError));
  }

  updateTaskReminder(task: Task): Observable<Task> {
    return this.taskRepo.updateTask(task).pipe(catchError(this.handleError));
  }

  addTask(task: Task): Observable<Task> {
    return this.taskRepo.addTask(task).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
