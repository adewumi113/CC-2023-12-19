// https://www.codewars.com/kata/5c556845d7e0334c74698706
// DESCRIPTION:
// Mr. Square is going on a holiday. He wants to bring 2 of his favorite squares with him, so he put them in his rectangle suitcase.

// Write a function that, given the size of the squares and the suitcase, return whether the squares can fit inside the suitcase.

// fit_in(a,b,m,n)
// a,b are the sizes of the 2 squares
// m,n are the sizes of the suitcase

//solution

function fit_in(a,b,m,n) {
   let combineSides = a + b;
   largestSide = Math.max(a, b)
   if(combineSides <= m)
   return largestSide <= n
   else if (combineSides <= n)
   return largestSide <= m
   else
   return false
}


//another solution
function fit_in(a, b, m, n) {
    return (a+b<=m && a<=n && b<=n)|| (a+b<=n && a<=m && b<=m);
}