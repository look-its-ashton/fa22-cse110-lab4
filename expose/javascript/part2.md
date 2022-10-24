## *question 1:*
Line 12 prints "3" because <code>i</code> was declared with <code>var</code> so it's accessible outside of the loop which increments it  3 times.

## *question 2:*
Line 13 prints "150" because that's the value of 50% off the last item on the list which is value 300 and it was declared with <code>var</code> so it's accessible outside of the function.

## *question 3:*
Line 14 prints the same thinb as line 13 would since both variables are declared with <code>var</code>.

## *question 4:*
The function will return "[ 50, 100, 150 ]" which is are the values of the prices reduced by the amount specified by the second argument, (0.5).

## *question 5:*
The code causes an error because <code>i</code> was declared in function scope with <code>let</code> and was accessed outside of the function on line 12.

## *question 6:*
The code causes an error because <code>discountedPrice</code> was declared in function scope with <code>let</code> and was accessed outside of the function on line 13.

## *question 7:*
Line 14 prints "150" as expected and doesn't cause an error since <code>finalPrice</code> was declared in the function and not in the loop so it's still in scope when the loop exits.

## *question 8:*
The function returns "[ 50, 100, 150 ]" as before because <code>discounted</code> was declared at the beginning of the function was remained in scope after the loop terminated.

## *question 9:*
The code causes an error because <code>i</code> was declared in function scope with <code>let</code> and was accessed outside of the function on line 11.

## *question 10:*
Line 12 prints "3" which is the length of the input list.

## *question 11:*
The function returns "[ 50, 100, 150 ]" since <code>discounted</code> is just a list populated with the values of <code>prices</code> each reduced by <code>discount</code> percent.

## *question 12:*

* A. student.name
* B. student["Grad Year"]
* C. student.greeting()
* D. student["Favorite Teacher"].name
* E. student.courseLoad[0]

## *question 13:*
* A. '3' + 2 = '32'; since '3' is a string so values are concatenated.
* B. '3' - 2 = 1; since "-" doesn't make sense for concatenation so '3' becomes an integer and subtraction is performed.
* C. 3 + null = 3; since null becomes converted to integer value 0.
* D. ‘3’ + null = SyntaxError; since null is an invalid string so concatenation results in an error.
* E. true + 3 = 4; since true is equivalent integer 1 and so standard addition is performed.
* F. false + null = 0; since false is equivalent to integer 0 and null is equivalent to integer 0.
* G. '3' + undefined = '3undefined'; string concatenation is performed.
* H. '3' - undefined = NaN; since integer subtraction is attempted but undefined is a not a number (NaN).

## *question 14:*
* A. ‘2’ > 1 = true; since '2' is converted to an integer and both integer values are compared.
* B. '2' < '12' = false; since the  alphabeticaly 1 is less than 2.
* C. 2 == '2' = true; '2' becomes an integer and thus equal.
* D. 2 === '2' = false; since the two data types are different.
* E. true == 2 = false; since true is equivalent to integer 1 not 2.
* F. true === Boolean(2) = true; since any number except 0 converted to a boolean is true and is the same datatype as true.

## *question 15:*
The difference is that "==" tests if the values are equivalent after type conversion and "===" compares values without casting either datatype.

## *question 17:*
The result of this call is "[ 2, 4, 6 ]" which is actually just the input list with every element multiplied by 2. This happens because the function iterates through the input list, calls <code>doSomething</code> on this element which returns double the input, and pushes the result onto the output list. The result is that every element of the input is doubled and sent to the output.

## *question 19:*
The output is: <br>1<br>4<br>3<br>2<br> This happens because the function executes the synchronous print statements first and then the async statements later. The second async print statement doesn't have a delay so it's printed first and the first async statement is printed after 1 second.