//variables
const tweetList = document.getElementById('tweet-list')



//event listeners
eventListeners()

function eventListeners(){
   //form submission
   document.querySelector('#form').addEventListener('submit', newTweet)

   //remove tweet from the list
   tweetList.addEventListener('click', removeTweet)

   //document
   document.addEventListener('DOMContentLoaded', localStorageOnLoad)
}


//functions

function newTweet(e){
   e.preventDefault();
  //read the text 
   const tweet = document.getElementById('tweet').value;

//create remove btn
const removeBtn = document.createElement('a');
removeBtn.classList = 'remove-tweet';
removeBtn.textContent ='X'

   //create an <li> element
   const li = document.createElement('li');
   li.textContent = tweet;

   //add remove button to each tweet
    li.appendChild(removeBtn);

   //add to the list
   tweetList.appendChild(li);


//add to loc storage
addTweetLocalStorage(tweet);

//print the alert
alert('Tweet Added')
//clean the form
this.reset();
}

//removes tweets frome the DOM
function removeTweet(e){
   if(e.target.classList.contains('remove-tweet')){
      e.target.parentElement.remove()
   }
   //remove frome storage
   removeTweetLocalStorage(e.target.parentElement.textContent)
}

//add the tweets to loc storage
function addTweetLocalStorage(tweet){
   let tweets = getTweetsFromeStorage();

   //add the tweet into the arr
   tweets.push(tweet);
   //convert arr to string
   localStorage.setItem('tweets', JSON.stringify(tweets))
}

function getTweetsFromeStorage(){
   let tweets;
   const tweetsLS = localStorage.getItem('tweets');
   //if null => empty arr
   if(tweetsLS===null){
      tweets =[]
   }else{
      tweets = JSON.parse(tweetsLS)
   }
   return tweets;
}

//prints local storage tweets on load
function localStorageOnLoad(){
   let tweets = getTweetsFromeStorage();

   //loop throught atorage and print the values
   tweets.forEach(function(tweet){
      //create remove btn
      const removeBtn = document.createElement('a');
      removeBtn.classList = 'remove-tweet';
      removeBtn.textContent ='X'

      //create an <li> element
      const li = document.createElement('li');
      li.textContent = tweet;
     

       //add remove button to each tweet
       li.appendChild(removeBtn);

       //add to the list
       tweetList.appendChild(li);
   })
}

//removes tweet frn loc storage
function removeTweetLocalStorage(tweet){
   //get tweets from the storage
let tweets = getTweetsFromeStorage();
//remove x from tweet
const tweetDelite = tweet.substring(0,tweet.length -1)
//loop throught the tweets and remove the tweets that equal
tweets.forEach(function(tweetLS,index){
if(tweetDelite===tweetLS){
   tweets.splice(index, 1)
}
})
//save the data
localStorage.setItems('tweets', JSON.stringify(tweets))
}