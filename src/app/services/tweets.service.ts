import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Imports observable so we can make use of it in the HttpClient, that uses it for transactions.
import { Observable } from 'rxjs';
import { Tweets } from '../interfaces/tweet';

@Injectable({
  providedIn: 'root'
})
export class TrumpTweetsService {

  //
  constructor(private http:HttpClient) {

   }
  //Sets the getTweets to observable,
   getTweets (): Observable<Tweets[]> {
     //returns the http
    return this.http.get<Tweets[]>('./assets/data/trumpTweets.json');
   }
}
