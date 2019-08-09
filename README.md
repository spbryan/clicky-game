# clicky-game
## Application Description
_This site provides a game or memory and luck.  Click on an NPC and watch as the board reshuffles.  Select again but do so wisely as clicking on the same character twice results in failure and loss.  Try to reach a score of 12._

## Application Organization
The application is organized with separate js files defined for each perspective:
* __src/index.js__ - Starting point and container for main react dom render
* __src/App.js__ - Main js component that maintains state and core game funtionality.  Access Wrapper and Character components for full rendering of screen.
* __src/components/Wrapper/index.js__ - Wrapper component
* __src/components/Score/index.js__ - Component to render the dynamic score
* __src/components/Character/index.js__ - Component that houses the character cards

## Running the Application
npm start

* The page opens with an array of Skyrim NPC characters.  
* When a user clicks on a character the board re-shuffles and the user is prompted to select again
* If the next selected character has not been previously chosen then the counter increments by 1 and the game continues
* If the next selected character has been selected already the game is over

## Technology
This application was written in JavaScript using ReactJs. 

__Dependencies__
* react: ^16.8.6
* react-dom: ^16.8.6
* react-scripts: 3.0.1

## Development Role
Application designed and developed by Sean Bryan as part of a homework assignment for the UNH Full Stack Boot Camp.
