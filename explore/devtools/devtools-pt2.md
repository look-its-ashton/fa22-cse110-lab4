## *Question 1:*
The bug is that num1 and num2 are assigned string values and result is assigned the concatentation of these two strings and not the addition of the values represented by the strings.

## *Question 2:*
To fix the bug I would convert num1 and num2 to integers before using the '+' operator. In my solution I use parseInt() to accomplish this.