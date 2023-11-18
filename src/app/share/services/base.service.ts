import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environment} from "../../../environment/environment.development";


export class BaseService<T> {
  basePath: string = `${environment.serverBasePath}`;
  resourceEndPoint: string = "/resources";

  httpOptions = {
    headers: new HttpHeaders( {
      'Content-Type': 'application/json'
    })
  }

  constructor(protected http: HttpClient) { }

  protected resourcePath(): string {
    return `${this.basePath}${this.resourceEndPoint}`;
  }

  handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error(`An error ocurred: ${error.error.message}`);
    }
    else
    {
      console.log(`Backend returned core ${error.status}, body was ${error.error} `);
    }
    return throwError(()=> new Error('Something happened with request, please try again later.'));
  }

//Get All Resources
  getAll(): Observable<T>{
    return this.http.get<T>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  //Create Resource
  create(item: any) {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
