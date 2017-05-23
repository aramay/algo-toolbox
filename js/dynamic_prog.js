1) A child is running up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time.
    Implement a method to count how many possible ways the child can run up the stairs.

Jack's note:
There are three approaches to this problem.
- recursive algorithm
- top-down dynamic programming - it is actually a recursive algorithm with caching, that saves repeated sub-problems solutions so there is no repetitive calculations.
- bottom-up dynamic programming - starting from the smallest possible problem size, and work the way up to the original size problem. This can be done by caching states in table, represented in a 1d or 2d arrays. HINT: use two for-loops. The first for-loop is the step size, start from 0 to n steps (thus bottom-up). The second for-loop controls how many hops a child can start with, which are 1 step, 2 steps, or 3 steps.


================== Jack's solution ================
- top-down
function countWays (n, memo) {
  memo = memo || {};

    if ( n === 0 ) {
        return 1;
    }
    else if ( n < 0 ) {
        return 0
    }
    else {
        if ( ! memo.hasOwnProperty( n ) ) {
      memo[n] = countWays(n-1, memo) + countWays(n-2, memo) + countWays(n-3, memo);
        }
        return memo[ n ];
    }
}

- bottom-up

function countWays( nStairs, steps ) {
  var result = [];

  result[ 0 ] = 1;
  result[ 1 ] = 1;

  for ( var i = 2; i <= nStairs; i++ ) {
    result[ i ] = 0;
    for ( var j = 1; j <= steps && j <= i; j++ ) {
      result[ i ] += result[ i - j ];
    }
  }
  console.log('result', result);
  return result[ nStairs ];
}

console.log( countWays(4, 4) );
==============================================================

==== Amit Soln1 recursive====
class Main
{
     public static void main(String[] args)
     {
        int n = 3;
        int nways = soln1(n);
        System.out.println(nways);
     }

     public static int soln1(int n)
     {
         if(n==0) return 1;
         if(n<0) return 0;

         return soln1(n-1) + soln1(n-2) + soln1(n-3);
     }

}
==============================

======== Sheldon solution =================
function stepsToTheTop(n, memo) {

    if (!memo) memo = {}

    if (n < 0) return 0
    else if (n == 0) return 1

    if (!memo.hasOwnProperty(n)) {
        memo[n] = stepsToTheTop(n-1, memo) +
        stepsToTheTop(n-2, memo) +
        stepsToTheTop(n-3, memo)
    }

    return memo[n]

}
=======================================




============ Amit soln2 for top down dynamic programming =======
class Main
{
     public static void main(String[] args)
     {
        int n = 4;
        int nways = soln2(n);
        System.out.println(nways);
     }

     private static int[] ans;

     public static int soln2(int n)
     {
         if(n==0) return 1;
         if(n<0) return 0;

         ans = new int[n+1];
         ans[0] = 1; ans[1] = 1;

         return solve(n);
     }


     public static int solve(int n)
     {
         if(n==0) return 1;
         if(n<0) return 0;

         if(ans[n]> 0) return ans[n];

         int nways = solve(n-1) + solve(n-2) + solve(n-3);
         ans[n] = nways;

         return nways;
     }

}
==============================================


====================Amit Soln3 for bottom up dynamic programming =======
class Main
{
     public static void main(String[] args)
     {
        int n = 3;
        int nways = soln3(n);
        System.out.println(nways);
     }

     private static int[] ans;

     public static int soln3(int n)
     {
         if(n==0) return 1;
         if(n<0) return 0;

         ans = new int[n+1];
         ans[0] = 1; ans[1] = 1; ans[2] = 2;

         return solve(n);
     }


     public static int solve(int n)
     {
         //build the dp array
         for(int i=3;i<=n;i++)
         {
             ans[i] = ans[i-1] + ans[i-2] + ans[i-3];
         }

         return ans[n];
     }

}
==================================================================
Anju recursive solution.
Int fib(int n){
If(n==0)
return 0;
if(n==1)
    return 1;
if(n==2)
    return 2;

return fib(n-1)+fib(n-2);
}
//Given n the number of steps returns the different ways to climb the stairs.
 Int count_ways(int n){
 Return fib(n+1);
}
============================================================================

Binoy top-down solution (Ruby)
@store = {}
def steps(n)
  return 1 if n == 0
  return 0 if n < 0
  return (@store[n - 1] ||= steps(n - 1)) +
         (@store[n - 2] ||= steps(n - 2)) +
         (@store[n - 3] ||= steps(n - 3))
end
p steps(4)

----------------------------------------------------------

// Carol's recursive solution #1 -- allows quick and easy viewing of the underlying step paths, which gets rather bloated in terms of space -- as written, will accommodate different step possibilities (e.g. 2,3,5 instead of just 1,2,3)

const countStepPossibilities = (staircaseLength, possibleSteps) => {
    let stepSequences = [];
    const takeStep = (pathToThisPoint, stepsRemaining) => {
        if(stepsRemaining === 0) {
            stepSequences.push(pathToThisPoint);
            return;
        }
        possibleSteps.forEach((step) => {
            if(stepsRemaining - step >= 0){
                takeStep(pathToThisPoint.concat(step), stepsRemaining-step);
            }
        });
    }
    takeStep([], staircaseLength);
    // console.log('stepSequences', stepSequences)
    return stepSequences.length;
}

// Carol's recursive solution #2 -- no viewing of underlying step paths, but space is O(1) in terms of space -- as written, will accomodate different step possibilities

const countStepPossibilitiesFinal = (staircaseLength, possibleSteps) => {
    let count = 0;
    const takeStep = (stepsRemaining) => {
        if(stepsRemaining === 0) {
            count++;
            return;
        }
        possibleSteps.forEach((step) => {
            if(stepsRemaining - step >= 0){
                takeStep(stepsRemaining-step);
            }
        });
    }
    takeStep(staircaseLength);
    return count;
}

// Carol's bottom-up DP solution -- no viewing of underlying step paths, space O(n) -- as written will accomodate different step possibilities

const countStepPossibilitiesDP = (staircaseLength, possibleSteps) => {
    let memo = [];
    memo[0] = 1;
    for(let i = 1; i <= staircaseLength; i++){
        let sum = 0;
        possibleSteps.forEach((step) => {
            if(i-step>=0){
                sum+=memo[i-step]
            }
        });
        memo[i]=sum;
    }
    return memo[staircaseLength];
}

// testing the three different approaches with step possibilities of 1,2,3
let possibleSteps = [1,2,3];
for(let numSteps = 1; numSteps<=20; numSteps++){
    console.log('\n')
    console.log(`counting for ${numSteps} stairs and possible steps of ${possibleSteps}\n output of ${countStepPossibilities(numSteps, possibleSteps)}`);
    console.log('countStepPossibilitiesFinal',countStepPossibilitiesFinal(numSteps, possibleSteps));
    console.log('countStepPossibilitiesDP',countStepPossibilitiesDP(numSteps, possibleSteps));
}

// testing the three different approaches with step possibilities of 2,4,5,9
possibleSteps = [2,4,5,9];
for(let numSteps = 1; numSteps<=20; numSteps++){
    console.log('\n')
    console.log(`counting for ${numSteps} stairs and possible steps of ${possibleSteps}\n output of ${countStepPossibilities(numSteps, possibleSteps)}`);
    console.log('countStepPossibilitiesFinal',countStepPossibilitiesFinal(numSteps, possibleSteps));
    console.log('countStepPossibilitiesDP',countStepPossibilitiesDP(numSteps, possibleSteps));
}
========================================================================================

//Anju's Solution for bottom up with out step possibilities in c++.

#include<iostream>


#define MAX 10
using namespace std;



int count_ways_Util(int n) {
    int cw[MAX];
    cw[0] = 0;
    cw[1] = 1;
    for (int i = 2; i <= n; i++) {
        cw[i] = cw[i - 1] + cw[i - 2];
    }
    return cw[n];
}

int count_ways(int n) {
    return count_ways_Util(n);
}

int main() {
    int steps = 4;
    cout << "Number of ways: " << count_ways(steps) << endl;
}

=============================================================
//ANju's solution to bottom up in m possibilities.
#include<iostream>
#include<vector>

using namespace std;

int count_ways_util(int nstairs, int msteps) {
    int cw[10];
    cw[0] = 1; cw[1] = 1;
    for (int i = 2; i < nstairs; i++) {
        cw[i] = 0;
        for (int j = 1; j <= msteps && j <= i; j++) {
            cw[i] += cw[i - j];
        }
    }
    return cw[nstairs - 1];
}

int count_ways(int n, int m) {
    return count_ways_util(n+1, m);
}

int main() {
    int n = 4, m = 2;
    cout << "The number of ways: " << count_ways(n, m) << endl;

}
