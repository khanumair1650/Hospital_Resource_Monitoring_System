import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Hospital {
  _id: number;
  description: String;
  name: String;
  address: String;
  beds: String;
  oxygen: String;
  bloods: String;
  vaccine: String;
  contactno: Number;
  link: String;
  pin: Number;
}
@Injectable({
  providedIn: 'root'
})
export class UserCrudService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
z
  constructor(private httpClient: HttpClient) { }

  addHospital(hospital: Hospital): Observable<any> {
    return this.httpClient.post<Hospital>('http://localhost:3000/hospitals/create', hospital, this.httpOptions)
      .pipe(
        catchError(this.handleError<Hospital>('Error occured'))
      );
  }

  getHospital(pin): Observable<Hospital[]> {
    return this.httpClient.get<Hospital[]>('http://localhost:3000/hospitals/fetch/' + pin)
      .pipe(
        tap(_ => console.log(`Hospital fetched: ${pin}`)),
        catchError(this.handleError<Hospital[]>(`Get Hospital Pin=${pin}`))
      );
  }
  getHospitals(): Observable<Hospital[]> {
    return this.httpClient.get<Hospital[]>('http://localhost:3000/hospitals')
      .pipe(
        tap(hospitals => console.log('Hospital retrieved!')),
        catchError(this.handleError<Hospital[]>('Get hospitals', []))
      );
  }

  updateHospital(pin, hospital: Hospital): Observable<any> {
    return this.httpClient.put('http://localhost:3000/hospitals/update/' + pin, hospital, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Hospital updated: ${pin}`)),
        catchError(this.handleError<Hospital[]>('Update Hospital'))
      );
  }

  deleteHospital(pin): Observable<Hospital[]> {
    return this.httpClient.delete<Hospital[]>('http://localhost:3000/hospitals/delete/' + pin, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Hospital deleted: ${pin}`)),
        catchError(this.handleError<Hospital[]>('Delete Hospital'))
      );
  }

  searchHospital(name): Observable<Hospital[]> {
    return this.httpClient.get<Hospital[]>('http://localhost:3000/hospitals/search/' + name, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Hospital Founded: ${name}`)),
        catchError(this.handleError<Hospital[]>('Search Hospital'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } 
}
