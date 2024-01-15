# LoginForm + SUPER-TicTacToeGame

## Table of Contents
1. [**General Info**](#general-info)
2. [**Technologies Used**](#technologies-used)
3. [**Setup**](#setup)
4. [**Code & Snippets**](#CodeSnippets)
## General Info
A static login Page which takes to a game of SUPER-TicTacToe
## Technologies Used
- HTML
- CSS
- JavaScript
- JQuery
  

## Setup1: The LoginForm
Using the LiveServer you can see this project.
For the First Part, its a static Page where we have a logo, categories, and a login button.
Next we have a login form with email and password input fields, remember me buttonm Forgot password link and login button.
If an account isn't a prompt is preented to create one. And finally a Let's Play link can be pressed which takes you to the game.

## Code & Snippets

![Capture](https://github.com/AhmadBahr/LoginForm-SUPER-TicTacToeGame/assets/150359856/e4ddfe70-77d9-4ba2-83b0-659b640e8951)
![Capture2](https://github.com/AhmadBahr/LoginForm-SUPER-TicTacToeGame/assets/150359856/98f2d81d-95c1-4e51-85db-e3192018a373)

## Setup2: The Game
When the button is pressed and the game appeared, it will show a twisted game of tictactoe.
Tic-tac-toe is a two player game where players X and O take turns marking a 3 × 3 grid.
The player who successfully places three of their symbol in a horizontal, vertical, or diagonal
row wins the game. Alternate variations of tic-tac-toe have been developed over time, such as 3 dimensional
tic-tac-toe on a 3×3×3 cube. The game of super tic-tac-toe (STTT), sometimes called ultimate tictac-toe. Super tic-tac-toe has been used in the computer science community as an example of Monte-Carlo Artificial Intelligence. 
The logic of the game is that we have a standard 3 × 3 tic-tac-toe board.
Now, inside each of the 9 squares, we place another tic-tac-toe board
We refer to the larger 3 × 3 grid as a board and the 9 smaller 3 × 3 grids as fields.
Player 1 plays X’s and player 2 plays O’s. Now, suppose that player 1 decides to put an X in the middle of the field in the upper left corner of the board. Then, player 2 must put an
O anywhere in the middle field of the board. In other words, the placement in a field of a
player determines which field on the board the next player must play. A game of super tic-tac-toe is won in a very similar fashion as a tradition tic-tac-toe
game is won: You must get three X’s or three O’s in a row on the board. In order to get an
X or and O on the board, the player must win the game of tic-tac-toe in the corresponding
field. It is possible for a game of tic-tac-toe to end in a draw; meaning that no player successfully
placed three of their symbol in a row. If that happens in one of the fields on the board of
super tic-tac-toe, then the player who has the most of their symbol in that field will win
that square on the board. It is also possible that the current players move will send the next
player to a field that has already been won. In this case, the next player is allowed to move
anywhere on the board. And finally, the winning symbol of the smaller 3 x 3 is then displayed the bigger 3 x 3. A game is won when all the 3 x 3 fields are filled. 

## Code & Snippets

The HTML is used to draw the board.

![Capture](https://github.com/AhmadBahr/LoginForm-SUPER-TicTacToeGame/assets/150359856/39c8f79a-0e90-49dd-a1ce-22fc96f41b2d)

The CSS is used to draw the symbols and give life to each symbol purely for visuals. 

![Capture2](https://github.com/AhmadBahr/LoginForm-SUPER-TicTacToeGame/assets/150359856/6bbd123a-1a68-4125-a765-075c6e7ddf7f)

The JQuery is introduced to give the logic of how the game will work and give it the rules and how its going to work.
So that the players can play.

![Capture3](https://github.com/AhmadBahr/LoginForm-SUPER-TicTacToeGame/assets/150359856/672abc97-3635-4221-af7c-7d6bb1f7d2ec)

