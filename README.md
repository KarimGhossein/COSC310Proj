# Basic info on ChatBot App
## INDIVIDUAL ADDITION

# List of API's
  ## Google Maps API
    The google maps API is implemented to let the user access any service provided by google maps. Users can ask the bot to show them the map when they'd like and it will pop up. When opened the map will start at your current location. Once in the maps the user can search for places and have the map take you there. In the search bar implemented is an autofill function that will try to guess what the user is trying to locate. As well you can zoom in and out and navigate manually.
  ## Google street view
    In addition to the google maps API I've added the google street view API. When the user would like, they can tell the bot to show them the street view box. Once opened it will get rid of the maps box. Users can scroll around thee accessible streets view and get a better look at exxactly what the surrounding area looks like. This is especially helpful for users who are not familiar with the area and are able to get a better visual of where their appointment will be



## Description of project being done. 

The project being done consists of two main elements, the back end of the chat bot which is handled by an API that sends back the user responses in text form, and user interface or view of the bot as a widget where a user can interact with the bot. The bot has the job to create, modify and delete appointments created by the user. This is in regards to a store, doctor's appointment or any type of appointment a user may need to set up with a service provider. 
  ## This project is integrating user accessibility by implementing a maps function as well. The maps function was added to this for easy sight of where you are located versus where the office you are making the appointment for is located. Along with this is the ability to see the street view of which location you are looking for.


## Limitations of project.

As it stands currently the system is not so smart, users can have different ways of saying things and the system will not capture what the user is trying to say exactly. There is always a fallback message in the case that the bot doesn't understand the user output but, there's many instances where the bot does not understand the input of the user and the user has to figure out ways to make the bot understand what they are trying to say. 
# The interactioong with this bot is not very reifined and can seem clunky. Sometimes the input will confuse the system and it will have output that relates to the input poorly. Imperfect input can affect that program poorly as well. The street view and maps are slightly inaccurate and this can cause some more work to be done by the user (having to find the place again). The maps API only provides the map and locations it self and therefore will not be able to create a route from source to destination.

## Documentation for how to launch the application
***** IF ON MAC START EACH COMMAND LINE WITH SUDO *****
- ## Start the application by typing npm install 
- ## GOOGLE MAP API INSTALL ##
- ## GOOGLE STREET API INSTALL ##
- Then type npm start 

### Framework Used

Our project used React.JS as the front-end and view of our application. We used Twilio API to store and handle user incoming messages. We performed a data training on the ML model, given samples of the possible messages that a user may sent to the Twilio API.

In our React.JS, we organized our App class to import react widgit to render chat view, and import axios to sent HTTP Post request to an URL.

The App class has a handleNewUserMessage function that passes a message argument and send a promise to the Twilio Api with response text passed into addResponseMessage function.

The addResponseMessage function returns the ML generated message.

In our React.JS, we organized our App class to import react widgit to render chat view, and import axios to sent HTTP Post request to an URL. The App class has a handleNewUserMessage function that passes a message argument and send a promise to the Twilio Api with response text passed into addResponseMessage function.

  ## Using the Google api structure embedded in HTML, it is implemented as if it is used like a widget. It loads the script dircetly through googles cloud api service. It has the zoom and move attributs set at a default.Both the maps and street cview use the callback function to return the output of each feture##



## Features Added

- Named entity recognition
- Sentiment analysis tools
- POS tagging
- UI Improvements
- Extra topics
- Robustness
- ## Google  Street View ##
- ## Google Maps API ##

### Documentation on Sentiment Analysis & how it improved our Chat App

- We used NPM Sentiment Package to perform Sentiment Analysis
- At the end of our conversation with the Chat bot, it will asks how its service was, and prompts a feedback report
- We implemented setiment analysis to produce a score ranging from -5 to 5 so that the Chat bot could weigh the score from negative to positive, and provide a response appropriate to our feedback
- We can visually see the sentiment score to show that the sentiment score implementation is working properly
- We integrated sentiment analysis with the Twilio API to generate a proper response based on the feedback provided by us therefore enhancing the overall services of our chat bot
- Example shown below: ![Screen Shot 2021-03-29 at 8 41 41 PM](https://user-images.githubusercontent.com/53579064/112930534-52665400-90cf-11eb-871c-a72e3b6c4679.png)
  ![Screen Shot 2021-03-29 at 9 01 25 PM](https://user-images.githubusercontent.com/53579064/112931947-f4873b80-90d1-11eb-9cf3-c54769a3679d.png)
  ![image](https://user-images.githubusercontent.com/53579064/112930595-74f86d00-90cf-11eb-9507-1c96c22c7b3e.png)

### Documentation for follow-up response to irrelevant messages & examples of Robustness

- Initally, our bot could not provide follow up responses to messages that weren't understood by the bot, now the bot has capabilities to give at least 5 different reasonable responses when the user enters something outside the two topics. More importantly, the bot can understand when users message something irrelevant multiple times. Examples demonstrated below:
  ![Screen Shot 2021-03-29 at 9 22 41 PM](https://user-images.githubusercontent.com/53579064/112933581-fbfc1400-90d4-11eb-8054-3628e0d03d6b.png)
  ![Screen Shot 2021-03-29 at 9 15 17 PM](https://user-images.githubusercontent.com/53579064/112933481-cce5a280-90d4-11eb-9413-a2ab83bbe3df.png)
  ![Screen Shot 2021-03-29 at 9 15 37 PM](https://user-images.githubusercontent.com/53579064/112933509-d838ce00-90d4-11eb-8166-01511048e8e8.png)
  ![Screen Shot 2021-03-29 at 9 15 51 PM](https://user-images.githubusercontent.com/53579064/112933602-04ece580-90d5-11eb-820a-627f924bca21.png)
  ![Screen Shot 2021-03-29 at 9 16 05 PM](https://user-images.githubusercontent.com/53579064/112933613-08806c80-90d5-11eb-850a-c550f8f44bc3.png)

### Documentation of Introducing New Topics

- Initally, our bot could only schedule appointments but now we have implemented our bot to provide consultational service with multiple types of services where customers can learn about their hours of operation and how each type of services work.
  We introduced:

1. types of services
2. live phone call consultation
3. one to one consultation
4. group discussion consultation with multiple specialists

### UI
- We have a widgit that pop ups when clicked that you can browse the history of your conversation
- An interface that displays the sentiment score when being updated to ask for feedback from user
![Screen Shot 2021-03-29 at 9 01 25 PM](https://user-images.githubusercontent.com/53579064/112942911-a7ad6000-90e5-11eb-9c07-6c79c85b0e80.png)

### Documentation on spelling checking

We made implementations to combat against spelling error by measuring the confidence level of each messages recieved by the bot. Inside our Twilio dashboard, we looked at the types of user messages received and displayed a confidence level that corresponds to the appropriate type of response that our bot should generate. We categorize the types of messages received by the bot, and performed additional data training on them. Now the bot can detect spelling error and still understand the message.   
<img width="1196" alt="Screen_Shot_2021-03-29_at_10 09 57_PM" src="https://user-images.githubusercontent.com/53579064/112937243-2bfae580-90dc-11eb-999f-2fdb8c45436e.png">

### Testing Documentation:

Test against rendering main component without crashing: We used React.JS library to render into HTML on the DOM, however we want to make sure it is rendered properly, so we wrote a test for the App main component that it can render to the DOM. 

Test for looking at response status: We can check if we get a successful response. We call on axios and see if we get a 200 reponse which is successful and a 400 response which is unsuccessful. 

  ## For testing on the maps and  this is done through a local host after launching NPM. It's done in realtime and must be restarted each time it is recompiled (npm restart/ sudo npm restart) ##

