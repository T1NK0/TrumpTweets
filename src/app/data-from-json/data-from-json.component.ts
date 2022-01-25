import { Component, OnInit } from '@angular/core';
//Imports our interface (How we will read the json with our keys setup to mirror the json.)
import { Tweets } from '../interfaces/tweet';
//Imports our service so we can call it here in our component.
import { TrumpTweetsService } from '../services/tweets.service';

@Component({
  selector: 'app-data-from-json',
  templateUrl: './data-from-json.component.html',
  styleUrls: ['./data-from-json.component.css']
})

export class DataFromJsonComponent implements OnInit {

  //Create our tweets array, set to the type of our interface Tweets.
  tweets: Tweets[] = [];
  userName:string = "Donald J. Trump";
  userHandle:string = "@realDonaldTrump";
  profilePicture:string = "./assets/images/Donald_Trump_March_2015.jpg";

  constructor(private TweetsService: TrumpTweetsService) { }

  ngOnInit(): void {
    //looks at our TrumpTweetsService, and runs the function getTweets, where we then set a subscriber on, and says the key Tweet will contain all the tweet info from our json with the keys from our interface.
    this.TweetsService.getTweets().subscribe((tweet: Tweets[]) => {
      //Due to us always knowing that the next tweet will be there, since we have the file locally, we use next.
      next: this.tweets = tweet;
    });
  }

}
