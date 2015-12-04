# bowling_challenge

A code challenge to see how efficient I can be with starting a coding task from scratch.  I limited myself to 8 hours to see what I can accomplish
in a standard work day.  I felt good about the overall, somewhat functional product.  Things I see that need further work:

1.  No styling. Everything is vanilla AngularJS and HTML.
2.  Near the end I was close to hiding the 3rd ball that only occurs in the 10th frame but ran out of time before figuring out a method to ng-hide then ng-show when frame 10 was up.
3.  Also did not have time to figure out how to ng-show the "enter score" button upon game reset.
4.  The frameTen function has bugs that need to be tested.  Specifically when the user does not enter a value for the 3rd ball.  More conditionals likely needed.

Seems like a straightforward challenge from the outset but has many complications.  Fun challenge though!

Requirements:
Create a program in your choice of language that can calculate the score of a full round of bowling, based on user inputs and the following rules:

Strike
If you knock down all 10 pins in the first shot of a frame, you get a strike.
How to score: A strike earns 10 points plus the sum of your next two shots.

Spare
If you knock down all 10 pins using both shots of a frame, you get a spare.
How to score: A spare earns 10 points plus the sum of your next one shot.

Open Frame
If you do not knock down all 10 pins using both shots of your frame (9 or fewer pins knocked down), you have an open frame.
How to score: An open frame only earns the number of pins knocked down.

The 10th Frame
If you roll a strike in the first shot of the 10th frame, you get 2 more shots.
If you roll a spare in the first two shots of the 10th frame, you get 1 more shot.
If you leave the 10th frame open after two shots, the game is over and you do not get an additional shot.

How to Score: The score for the 10th frame is the total number of pins knocked down in the 10th frame.
