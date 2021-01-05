import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(answers: string): Observable<any> {
    return this.http.post(`https://email-api-free.herokuapp.com/email/send`,
      {
        recipient: 'trillingbot@gmail.com',
        subject: 'Answer from user',
        content: answers});
  }
}
