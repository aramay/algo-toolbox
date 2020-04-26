1) For a triangle structure that is made of carved stone, the top most level has 1 carved stone, the next level down has 2 carved stones, the next level has 3 carved stones, and so on. Compute recursively the total number of carved stones used to construct the triangle structure with the specified number of levels.

2) There are n houses built in a line, each of which contains some value in it.
A thief is going to steal the maximal value in these houses, but he cannot steal in two adjacent houses because the owner of a stolen house will tell his two neighbors on the left and right side. What is the maximal stolen value?

For example, if there are four houses with values {6, 1, 2, 7}, the maximal stolen value is 13 when the first and fourth houses are stolen.

3) Implement a binary search on a sorted array that contains the first 20 prime numbers, which is:

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
    53, 59, 61, 67, 71];

say using the recursion approach:
function searchPrime(primes, targetValue, min, max) {
  ...
}

// invoke
searchPrime(primes, 43, 0, primes.length);

4) Given a string and a non-empty substring sub, compute recursively the number of times that sub appears in the string, without the sub strings overlapping.

strCount("catcowcat", "cat") → 2
strCount("catcowcat", "cow") → 1
strCount("catcowcat", "dog") → 0

//////////////////////////Jack Solution////////////////////////
1)
function triangle(n){
  if ( n === 0 ) {
    return 0;
  }
  
  return n + triangle(n-1);
}

2)
function getMax(n, values){
  var maxVal = 0, current;

  if (n < 0) {
    return 0;
  }
  else if (n - 2 < 0) {
    return values[n];
  }

  for (var i = n; i >= 0; i--) {
    for (var j = i - 2; j >= 0; j--) {
      current = values[i] + getMax(j, values);
      maxVal = Math.max(maxVal, current);
    }
  }

  return maxVal;
}

3)
var searchPrime = function(array, targetValue, min, max) {
  var mid;
    min = min || 0;
    max = max || array.length - 1;

  if ( min > max ) {
    return -1;
  }

  mid = Math.floor( (max - min) / 2  ) + min;

  if (array[mid] === targetValue) {
    return mid;
  }
  else if ( array[mid] < targetValue ) {
    min = mid + 1;
  }
  else {
    max = mid - 1;
  }
  
  return searchPrime(array, targetValue, min, max);
};

4)
function strCount(string, testString){
  var length = testString.length;

  if (!string.length) {
    return 0;
  }

  if ( string.subString(0, length) === testString ) {
    return 1 + strCount(string.slice(length), testString);
  }
  else {
    return strCount(string.slice(0), testString);
  }

  return count;
}

// =====Yong=====
// 1)
function countStone(level) {
    return level == 1 ? level : (level + countStone(level - 1));
}
console.log(countStone(3));

// ======Jai ====
1)
def construct_triangle(n):
    if (n == 1):
        return 1
    return n+ construct_triangle(n-1)



//======== Amit #2 ==================
class Main {
     public static void main(String[] args) {        
          int[] price = {6, 1, 2, 7};       
          System.out.println(steal(price));
     }
        
     public static int steal(int[] price)
     {
         int n = price.length;
         if(n<=0) return 0;
         
         int[] dp = new int[n];
         
         dp[0] = price[0];
         if(n==1) return dp[0];
         
         dp[1] = Math.max(price[0],price[1]);
         if(n==2) return dp[1];
         
         for(int i=2;i<n;i++)
         {
            dp[i] = Math.max(price[i] + dp[i-2], dp[i-1]); 
         }
         
         return dp[n-1];
     }
}
//Neo #1
let countStons = function(level) {
    return Math.ceil(level * level / 2);
}

console.log(countStons(6));


=== Amit #1 ========
class Main {
     public static void main(String[] args) {
         
          int n = 3;       
          System.out.println(countNumStones(n));
     }
      
     public static int countNumStones(int n)
     {
        if(n==0) return 0;        
        return 1 + 2 * countNumStones(n-1);        
     }
}
======================
// =====Yong=====
// 2)
function steal(houses) {
    var total = 0;
    var max = -1;
    var list = houses;
    while (houses.length > 0) {
        max = Math.max(...list);
        for (var i in list) {
            if (list[i] == max) {
                if (i > 0 && i < list.length - 1)
                    list.splice(i - 1, 3);
                else if (i > 0)
                    list.splice(i - 1, 2);
                else if (i < houses.length - 1)
                    list.splice(i, 2);
                else
                    list.splice(i, 1);
                total += max;
            }
        }
    }
    console.log(total);
}

===== Amit #3 ======
class Main {
     public static void main(String[] args) {
         
         int[] primes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
                         53, 59, 61, 67, 71};
         
         System.out.println(search(primes,43,0,primes.length));
     }
      
     public static int search(int[] primes, int key, int lo, int hi)
     {
        if(lo>hi) return -1;
         
        int mid = lo + (hi-lo)/2; 
         
        if(primes[mid]==key) return mid;
        else if( key<primes[mid]) return search(primes,key,lo,mid-1);
        else return search(primes,key,mid+1,hi);
     }
}
=======================

==========Chethana - Java Solution=======
======#1===============

public class CountStone {

    public static void main(String[] args) {
        int n1=3,n2=5,n3=7;
        
        System.out.println(n1 +":" + countCarvedStone(n1));
        System.out.println(n2 +":" + countCarvedStone(n2));
        System.out.println(n3 +":" + countCarvedStone(n3));
    }
    public static int countCarvedStone(int levels)
    {
        
        if(levels==0) return 0;
        else 
        {
            return levels + countCarvedStone(levels-1);
        }
    }
    
}
========================================

// =====Yong=====
// 3)
function searchPrime(primes, targetValue, min, max) {
    var mid = min + Math.floor((max - min) / 2);
    if (mid < min || mid >= max)
        return -1;
    else if (primes[mid] == targetValue)
        return mid;
    else
        return primes[mid] > targetValue ? searchPrime(primes, targetValue, min, mid) : searchPrime(primes, targetValue, mid + 1, max);
}
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
    53, 59, 61, 67, 71
];


// =============Jai #2========

def stolen_goods(stealable_value):
    house_range = len(stealable_value)
    if house_range == 1 :
        return stealable_value[0]
    new_stealble_values  = stealable_value[2:]
    max_val = stealable_value[0]
    for i in range(len(new_stealble_values)):
        total = stealable_value[0] + stolen_goods(new_stealble_values[i:])
        if total > max_val:
            max_val = total
    return max_val
    
// =====Yong=====
// 4)
function strCount(str, sub) {
    if (str.length < sub.length)
        return 0;
    if (str.startsWith(sub)) {
        return 1 + strCount(str.substr(sub.length, str.length - sub.length + 1), sub);
    } else
        return strCount(str.substr(1, str.length - 1), sub);
}

//====Becki========
3)
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
  53, 59, 61, 67, 71];

function searchPrime(primes, targetValue, min, max) {
    let mid = Math.floor((min + max)/2)
    if (targetValue === primes[mid]) return mid
    if (targetValue < primes[mid]) return searchPrime(primes, targetValue, min, mid - 1)
    if (targetValue > primes[mid]) return searchPrime(primes, targetValue, mid + 1, max)
    return -1
}

searchPrime(primes, 43, 0, primes.length);

// =========== Jai #3 ==========
def searchPrime(primes, targetValue, min_ind, max_ind):
    if(max_ind==min_ind):
        return max_ind
    mid_index = len(primes)/2
    mid_val = primes[mid_index]
    if mid_val == targetValue:
        return min_ind + mid_index
        print mid_val, targetValue
    if mid_val < targetValue :
        return searchPrime(primes[mid_index:], targetValue, min_ind+mid_index, max_ind)
    else :
        return searchPrime(primes[:mid_index], targetValue, min_ind, max_ind-mid_index)

// =========== Sumit #4 ==========
public class SubStringOverlapping {
    
    public static void main(String[] args) {
        System.out.println(strCount("catcowcat", "cat"));
        System.out.println(strCount("catcowcat", "cow"));
        System.out.println(strCount("catcowcat", "dog"));
    }
    
    public static int strCount(String input,String subString){
        int count = 0;
        int index = input.indexOf(subString);
        if(index != -1){
            input = input.substring(index+subString.length(),input.length() );
            count = strCount(input, subString,1);
        }
        return count;
    }
    
    private static int strCount(String input, String subString, int count){
        int index = input.indexOf(subString);
        if(index != -1){
            input = input.substring(index+subString.length(),input.length() );
            count = strCount(input, subString,count) + 1;
        }
        return count;
    }
}


