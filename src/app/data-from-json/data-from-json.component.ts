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
  //my own printable variables made so it could be changed to other users if needed, and it therefor being dynamic.
  userName:string = "Donald J. Trump";
  userHandle:string = "@realDonaldTrump";
  profilePicture:string = "./assets/images/donald-trump-g4f9b5a7a4_1920.jpg";

  //Sends our tweetsService down so we can use it in ngOnInit, as TweetService.
  constructor(private TweetsService: TrumpTweetsService) { }

  ngOnInit(): void {
    //looks at our TrumpTweetsService, and runs the function getTweets, where we then set a subscriber on, and says the key Tweet will contain all the tweet info from our json with the keys from our interface.
    this.TweetsService.getTweets().subscribe((tweet: Tweets[]) => {
      //Due to us always knowing that the next tweet will be there, since we have the file locally, we use next.
      next: this.tweets = tweet;
    });
  }

}
