/*
Let us begin with an example:
Take a number: 56789. Rotate left, you get 67895.
Keep the first digit in place and rotate left the other digits: 68957.
Keep the first two digits in place and rotate the other ones: 68579.
Keep the first three digits and rotate left the rest: 68597. 
Now it is over since keeping the first four it remains only one digit which rotated is itself.

You have the following sequence of numbers:
56789 -> 67895 -> 68957 -> 68579 -> 68597
and you must return the greatest: 68957.

Task
  Write function max_rot(n) which given a positive integer n returns the maximum number you got doing rotations similar to the above example.
  So max_rot (or maxRot or ... depending on the language) is such as:
    max_rot(56789) should return 68957
    max_rot(38458215) should return 85821534
*/


// Solution

function maxRot(n) {
  let str = n.toString();
  let arr = [str];
  for (let i=0;i<=str.length-1 ;i++){
      str = str.slice(0,i)+str.slice(i+1)+str[i];
      arr.push(str.split().join());
  }
  return Math.max.apply(null, arr);
}

// or 

function maxRot(n) {
  //turn our number into an array
    let num = ('' + n).split('');
  //create holder array so that later we can get the highest number in the array
    let holderArr = [n];
  //loop through array
    for(let i = 0; i < num.length -1; i++){
  //take whatever number is at i index of our num array and move it to the end until loop stops
      num.push(num.splice(i,1));
  //push our num to our holder array as an integer 
      holderArr.push(parseInt(num.join('')));
    }
  //return the highest number in our holder array
    return Math.max.apply(num, holderArr);
}