// =====================
// EASY TASKS (30)
// =====================
// 1. Print each element of [1,2,3]. → Output: 1 2 3
  
  const eachElement = (arr) => arr.join(" ");
  var res = eachElement([1,2,3]) ;
  document.getElementById("info1").innerHTML = res;

// 2. Count elements in [10,20,30,40]. → Output: 4
      const countele = (arr) => arr.length;
	  var res = countele ([10,20,30,40]);
	  document.getElementById("info2").innerHTML = res;


// 3. Sum elements of [5,5,5]. → Output: 15
       const sumele = (arr) => {
		   sum = 0;
		   for(const ele of arr){
			   sum += ele
		   }
		   return sum
	   }
       var res = sumele([5,5,5]);
        document.getElementById("info3").innerHTML = res;

// 4. Create string from ['a','b','c']. → Output: "abc"

      const stringFrom = (arr) => arr.join("");
	  var res = stringFrom(['a','b','c']);
      document.getElementById("info4").innerHTML = res;
	  
// 5. Print indexes of [7,8,9]. → Output: 0 1 2

      const printIndex = (arr) => {
             var ret = arr.map((_, index) => index).join(' ');
           return ret;
       }
	  var res = printIndex([7,8,9]);
	  document.getElementById("info5").innerHTML = res;

// 6. Print index-value pairs for [10,20]. → Output: 0:10, 1:20

     const indexValue = (arr) => arr.map((value, index) => `${index}:${value}`).join(', ');
	 var res =  indexValue([10,20]);
	 document.getElementById("info6").innerHTML = res;


// 7. Count even numbers in [2,3,4,5]. → Output: 2

     const evenNum = (arr) => {
		var ct = 0
		 for(const ele of arr){
			 if(ele % 2 == 0){
				 ct++
			 }			 
		 }
		 return ct;
	 }
	 var res =   evenNum([2,3,4,5]);
	 document.getElementById("info7").innerHTML = res;



// 8. Count odd numbers in [11,12,13]. → Output: 2

     const oddnum = (arr) => {
		 var ct = 0
		 for(const ele of arr){
			 if(ele % 2 !== 0){
				 ct++
			 }			 
		 }
		 return ct;
	 }
	 var res =   oddnum([11,12,13]);
	 document.getElementById("info8").innerHTML = res;



// 9. Get max from [1,4,2]. → Output: 4

     const maxFrom = (arr) =>  Math.max(...arr);

	 var res =   maxFrom([1,4,2]);
	 document.getElementById("info9").innerHTML = res;



// 10. Get min from [9,1,6]. → Output: 1

     const minFrom = (arr) => Math.min(...arr);
	 var res =  minFrom([9,1,6]);
	 document.getElementById("info10").innerHTML = res;



// 11. Multiply all in [2,2,2]. → Output: 8

     const multiplyAll = (arr) => arr.reduce((a, b) => a * b);;
	 var res =  multiplyAll([2,2,2]);
	 document.getElementById("info11").innerHTML = res;



// 12. Sum of first 3 elements [2,4,6,8]. → Output: 12

     const sumOfThree = (arr) => arr.slice(0, 3).reduce((a, b) => a + b);
	 var res =  sumOfThree([2,4,6,8]);
	 document.getElementById("info12").innerHTML = res;



// 13. Print last element [1,2,3,4]. → Output: 4

     const lastEle = (arr) => arr.at(-1);
	 var res =   lastEle([1,2,3,4]);
	 document.getElementById("info13").innerHTML = res;



// 14. Count numbers > 5 in [3,7,9,1]. → Output: 2

     const ctNums= (arr) => {
		 var ct = 0;
		 for(const ele of arr){
			 if(ele > 5){
				 ct++;
			 }
		 }
		 return ct;
	 }
	 var res =   ctNums([3,7,9,1]);
	 document.getElementById("info14").innerHTML = res;



// 15. Print reversed elements [1,2,3]. → Output: 3 2 1

     const printReverse = (arr) => arr.reverse();
	 var res =   printReverse([1,2,3]);
	 document.getElementById("info15").innerHTML = res;



// 16. Count zeros in [0,1,0,2]. → Output: 2

     const ctZero = (arr) => {
		 var ct = 0;
		 for(const ele of arr){
			 if(ele == 0){
				 ct++;
			 }
			 
		 }
		return ct; 
	 }
	 var res =   ctZero([0,1,0,2]);
	 document.getElementById("info16").innerHTML = res;



// 17. Find average [10,20,30]. → Output: 20

     const findAverage = (arr) => {
		var getavg = sumele(arr) / arr.length;
		return getavg;
	 }
	 var res =   findAverage([10,20,30]);
	 document.getElementById("info17").innerHTML = res;



// 18. Concatenate integers [1,2,3]. → Output: "123"

     const conctaInt = (arr) => arr.join(""); 
	 var res =   conctaInt([1,2,3]);
	 document.getElementById("info18").innerHTML = res;



// 19. Print only negative nums [-1,2,-3]. → Output: -1 -3

     const printNegative = (arr) => arr.filter(num => num < 0);
	 var res =   printNegative([-1,2,-3]);
	 document.getElementById("info19").innerHTML = res;



// 20. Print only positive nums [-1,2,-3,4]. → Output: 2 4

     const positiveNum = (arr) => arr.filter(num => num > 0);
	 var res =   positiveNum([-1,2,-3,4]);
	 document.getElementById("info20").innerHTML = res;



// 21. Print length of [100,200]. → Output: 2

     const lengthOf = (arr) => arr.length; 
	 var res =   lengthOf([100,200]);
	 document.getElementById("info21").innerHTML = res;



// 22. Print boolean values [true,false,true]. → Output: true false true

     const booleanValue = (arr) => arr.join(" ");
	 var res =   booleanValue([true,false,true]);
	 document.getElementById("info22").innerHTML = res;



// 23. Count strings in [1,"hi",2,"yo"]. → Output: 2

     const ctStrings = (arr) => arr.filter(item => typeof item === "string").length 
	 var res =   ctStrings([1,"hi",2,"yo"]);
	 document.getElementById("info23").innerHTML = res;



// 24. Count numbers in ["a",2,"b",3]. → Output: 2

     const countNum = (arr) => arr.filter(num => typeof num === "number").length 
	 var res =   countNum(["a",2,"b",3,]);
	 document.getElementById("info24").innerHTML = res;



// 25. Convert [true,false] to 1 0. → Output: 1 0

     const convertInto = (arr) => arr.map(val => val ? 1 : 0);
	 var res =   convertInto([true,false]);
	 document.getElementById("info25").innerHTML = res;



// 26. Count letters in ['x','y','z']. → Output: 3

     const ctLetters = (arr) => arr.length;
	 var res =   ctLetters(['x','y','z']);
	 document.getElementById("info26").innerHTML = res;



// 27. Find difference between max-min [8,3,6]. → Output: 5

     const findDiff = (arr) => {
		 let max = Math.max(...arr);
         let min = Math.min(...arr);
         let difference = max - min;
		 return difference;
	 }
	 var res =   findDiff([8,3,6]);
	 document.getElementById("info27").innerHTML = res;



// 28. Print sum of even indexes [10,20,30,40]. → Output: 40

     const sumEven = (arr) => {
		 let sum = arr.filter((_, index) => index % 2 === 0).reduce((a, b) => a + b, 0);
         return sum;
	 }
	 var res =   sumEven([10,20,30,40]);
	 document.getElementById("info28").innerHTML = res;



// 29. Print sum of odd indexes [10,20,30,40]. → Output: 60

     const sumOdd = (arr) => {
		 let sumodd = arr.filter((_, index) => index % 2 !== 0).reduce((a, b) => a + b, 0);
		 return sumodd;
	 }
	 var res =   sumOdd([10,20,30,40]);
	 document.getElementById("info29").innerHTML = res;



// 30. Print middle element [5,10,15]. → Output: 10

     const middleEle = (arr) => arr[Math.floor(arr.length / 2)];
	 var res =   middleEle([5,10,15]);
	 document.getElementById("info30").innerHTML = res;




// =====================
// MEDIUM TASKS (30)
// =====================
// 31. Filter even numbers [1,2,3,4,5]. → Output: [2,4]

     const filterEven = (arr) =>  arr.filter(num => num % 2 == 0);
	 var res =   filterEven([1,2,3,4,5]);
	 document.getElementById("info31").innerHTML = res;


// 32. Filter odd numbers [6,7,8,9]. → Output: [7,9]

     const filterOdd = (arr) => arr.filter(num => num % 2 !== 0);
	 var res =   filterOdd([6,7,8,9]);
	 document.getElementById("info32").innerHTML = res;


// 33. Count duplicates in [1,2,2,3]. → Output: Duplicate: 2

     const countDuplicate = (arr) => arr.filter((item, index) => arr.indexOf(item) !== index);
	 var res =   countDuplicate([1,2,2,3]);
	 document.getElementById("info33").innerHTML = res;


// 34. Remove duplicates [1,1,2,3,3]. → Output: [1,2,3]

     const rmDuplicate = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);			 
	 var res =   rmDuplicate([1,1,2,3,3]);
	 document.getElementById("info34").innerHTML = res;


// 35. Reverse [10,20,30,40]. → Output: [40,30,20,10]

     const reverseArr = (arr) => arr.slice().reverse();
	 var res =   reverseArr([10,20,30,40]);
	 document.getElementById("info35").innerHTML = res;


// 36. Square each [2,3,4]. → Output: [4,9,16]

     const squarEach = (arr) => arr.map(num => num * num);
	 var res =  squarEach([2,3,4]);
	 document.getElementById("info36").innerHTML = res;


// 37. Double each [1,2,3]. → Output: [2,4,6]

     const doubleEach = (arr) => arr.map(num => num * 2); 
	 var res =   doubleEach([1,2,3]);
	 document.getElementById("info37").innerHTML = res;


// 38. Get only numbers [1,"hi",3,"ok"]. → Output: [1,3]

     const getNumbers = (arr) => arr.filter(item => typeof item === "number");
	 var res = getNumbers([1,"hi",3,"ok"]);
	 document.getElementById("info38").innerHTML = res;


// 39. Get only strings [7,"hi","bye"]. → Output: ["hi","bye"]

     const getStrings = (arr) => arr.filter(item => typeof item === "string");
	 var res = getStrings([7,"hi","bye"]);
	 document.getElementById("info39").innerHTML = res;


// 40. Find longest string ["a","abcd","bc"]. → Output: "abcd"

     const longestString = (arr) => arr.reduce((longest, current) =>
  current.length > longest.length ? current : longest
);
	 var res = longestString(["a","abcd","bc"]);
	 document.getElementById("info40").innerHTML = res;


// 41. Count vowels in ["a","e","i","o"]. → Output: 4

     const ctVowels = (arr) => {
		 const vowels = ["a", "e", "i", "o", "u"];
        const count = arr.filter(char => vowels.includes(char)).length;
		return count;
	 }
	 var res =   ctVowels(["a","e","i","o"]);
	 document.getElementById("info41").innerHTML = res;


// 42. Print index of max [3,9,7]. → Output: 1

     const indexOfMax = (arr) => arr.indexOf(Math.max(...arr));
	 var res =  indexOfMax([3,9,7]);
	 document.getElementById("info42").innerHTML = res;


// 43. Print index of min [8,5,6]. → Output: 1

     const indexOfMin = (arr) => arr.indexOf(Math.min(...arr));
	 var res = indexOfMin([8,5,6]);
	 document.getElementById("info43").innerHTML = res;


// 44. Pair index + value [1,2]. → Output: 0-1, 1-2

     const pairIndex = (arr) => arr.map((value, index) => `${index}-${value}`).join(', '); 
	 var res = pairIndex([1,2]);
	 document.getElementById("info44").innerHTML = res;


// 45. Sum nested array [[1,2],[3,4]]. → Output: 10

     const nestedArr = (arr) => arr.flat().reduce((total, num) => total + num, 0);
	 var res =   nestedArr([[1,2],[3,4]]);
	 document.getElementById("info45").innerHTML = res;


// 46. Flatten [[1,2],[3,4]]. → Output: [1,2,3,4]

     const flatInt = (arr) => arr.flat();
	 var res =   flatInt([[1,2],[3,4]]);
	 document.getElementById("info46").innerHTML = res;


// 47. Count primes [2,3,4,5]. → Output: 3

     const countPrimes = (arr) => arr.filter(n => n > 1 && [...Array(n - 2).keys()].every(i => n % (i + 2) !== 0)).length;
	 var res = countPrimes([2,3,4,5]);
	 document.getElementById("info47").innerHTML = res;


// 48. Check palindrome [1,2,1]. → Output: true

     const palindroms = (arr) => arr.join() === [...arr].reverse().join();
	 var res =  palindroms([1,2,1]);
	 document.getElementById("info48").innerHTML = res;


// 49. Check palindrome [1,2,3]. → Output: false

     const checkPalindrome = (arr) => arr.join() === [...arr].reverse().join();
	 var res = checkPalindrome([1,2,3]);
	 document.getElementById("info49").innerHTML = res;


// 50. Print unique chars ['a','b','a','c']. → Output: a b c

     const uniqChar = (arr) => {
		 const uniqueChars = [...new Set(arr)];
		 return uniqueChars.join(" ");
	 }
	 var res =  uniqChar(['a','b','a','c']);
	 document.getElementById("info50").innerHTML = res;


// 51. Find difference of sums [1,2,3,4] evens-odds. → Output: 2

     const sumofDiff =(arr) =>{
		 
		 let evens = arr.filter(num => num % 2 == 0);
		 let sum1 = sumele(evens);
		 let odds = arr.filter(num => num % 2 !== 0);
		 let sum2 = sumele(odds);
		 
		 return sum1 - sum2;
		 
	 } 
	 var res =   sumofDiff([1,2,3,4]);
	 document.getElementById("info51").innerHTML = res;


// 52. Find all divisible by 3 [3,6,7,8,9]. → Output: [3,6,9]

     const divisibleAll = (arr) => arr.filter(num => num % 3 === 0);
	 var res =   divisibleAll([3,6,7,8,9]);
	 document.getElementById("info52").innerHTML = res;


// 53. Count truthy items [0,"hi",false,1]. → Output: 2

     const truthyItems = (arr) =>arr.filter(Boolean).length; 
	 var res =   truthyItems([0,"hi",false,1]);
	 document.getElementById("info53").innerHTML = res;


// 54. Count falsy items [0,"",null,false]. → Output: 4

     const falsyItems = (arr) => arr.filter(item => !item).length;
	 var res =   falsyItems([0,"",null,false]);
	 document.getElementById("info54").innerHTML = res;


// 55. Generate frequency map [a,a,b]. → Output: {a:2,b:1}
   

// 56. Print chars of ["hi","ok"]. → Output: h i o k

     const charOf = (arr) => {
		 let chars = arr.flatMap(str => str.split(''));
		 return chars.join(" ");
	 }
	 var res = charOf(["hi","ok"]);
	 document.getElementById("info56").innerHTML = res;


// 57. Count digits in [12,345,6]. → Output: Total digits=6

     const ctDigits = (arr) =>arr.map(num => num.toString().length).reduce((sum, len) => sum + len, 0); 
	 var res =   ctDigits([12,345,6]);
	 document.getElementById("info57").innerHTML = res;


// 58. Index of target 4 in [1,2,4,5]. → Output: 2

     const tagetOf = (arr) => {
		 let target = 4;
		 let indexs = arr.indexOf(target);
		 return indexs;
	 }
	 var res = tagetOf([1,2,4,5]);
	 document.getElementById("info58").innerHTML = res;


// 59. Total string lengths ["hi","ok"]. → Output: 4

     const stringLength = (arr) => {
		 let chars = arr.flatMap(str => str.split(''));
		 return chars.join("").length;
	 }
	 var res = stringLength(["hi","ok"]);
	 document.getElementById("info59").innerHTML = res;


// 60. Count uppercase ["Hi","OK","hey"]. → Output: 2

     const ctUppercase = (arr) => arr.filter(str => str === str.toUpperCase()).length;
	 var res = ctUppercase(["Hi","OK","hey"]);
	 document.getElementById("info60").innerHTML = res; 



// =====================
// ADVANCED TASKS (30)
// =====================
// 61. Rotate array [1,2,3,4] right by 1. → Output: [4,1,2,3]

     const rotatearr = (arr) => {
		 let rotated = arr.join(',').split(',');
        rotated.unshift(rotated.pop()); 
        return rotated.map(Number);
	 }
	 var res =   rotatearr([1,2,3,4]);
	 document.getElementById("info61").innerHTML = res;


// 62. Rotate left by 2 [1,2,3,4]. → Output: [3,4,1,2]

     /*const rotateleft = (arr) => {
		 let rotated = arr.join(',').split(',');
         rotated.push(rotated.shift()); 
         rotated.push(rotated.shift()); 

         return = rotated.map(Number);
	 }
	 var res =  rotateleft([1,2,3,4]);
	 document.getElementById("info62").innerHTML = res;*/


// 63. Find second largest [5,9,3,8]. → Output: 8

     const secondLarge = (arr) => {
		 let seclargest = [...new Set(arr)].sort((a, b) => b - a)[1];
		 return seclargest;
	 }
	 var res =   secondLarge([5,9,3,8]);
	 document.getElementById("info63").innerHTML = res;


// 64. Find second smallest [4,1,7,3]. → Output: 3

     const secondSmallest = (arr) => {
		 let secSmallest = [...new Set(arr)].sort((a, b) => a - b)[1];
		 return secSmallest;
	 }
	 var res =  secondSmallest([4,1,7,3]);
	 document.getElementById("info64").innerHTML = res;


// 65. Sort ascending [3,1,2]. → Output: [1,2,3]

     const sortascend = (arr) => arr.sort((a, b) => a - b);
	 var res =   sortascend([3,1,2]);
	 document.getElementById("info65").innerHTML = res;


// 66. Sort descending [4,9,2]. → Output: [9,4,2]

     const sortDescnd = (arr) => arr.sort((a, b) => b - a);
	 var res =  sortDescnd([4,9,2]);
	 document.getElementById("info66").innerHTML = res;


// 67. Group by parity [1,2,3,4]. → Output: {even:[2,4], odd:[1,3]}

    /* const groupBy = (arr) => {
		
			let even = arr.filter(n => n % 2 === 0),
            let odd = arr.filter(n => n % 2 !== 0)

		 return ${even} ${odd};
		 
	 }
	 var res =  groupBy([1,2,3,4]);
	 document.getElementById("info67").innerHTML = res;*/


// 68. Group by type [1,"a",true]. → Output: {number:[1], string:["a"], boolean:[true]}

    /*const groupBytype = (arr) => 
	 var res =   groupBytype([1,"a",true]);
	 document.getElementById("info68").innerHTML = res;*/


// 69. Find intersection [1,2,3] & [2,3,4]. → Output: [2,3]

     const insertion = (arr1, arr2) => arr1.filter(value => arr2.includes(value)); 
	 var res =   insertion([1,2,3] , [2,3,4]);
	 document.getElementById("info69").innerHTML = res;


// 70. Find union [1,2],[2,3]. → Output: [1,2,3]

     const arrUnion = (arr1, arr2) => {
		let union = [...new Set([...arr1, ...arr2])];
		return union;
	 }
	 var res =   arrUnion([1,2],[2,3]);
	 document.getElementById("info70").innerHTML = res;


// 71. Difference [1,2,3],[2,3]. → Output: [1]

     const arrDiff = (arr1, arr2) => {
		let  difference = arr1.filter(value => !arr2.includes(value));
		return difference;
	 }
	 var res =  arrDiff([1,2,3],[2,3]);
	 document.getElementById("info71").innerHTML = res;


// 72. Count frequency of words ["hi","hi","ok"]. → Output: {hi:2,ok:1}

     /*const countFreq = (arr) => 
	 var res =   countFreq(["hi","hi","ok"]);
	 document.getElementById("info72").innerHTML = res;*/


// 73. Find most frequent element [2,2,3,1]. → Output: 2

     /*const frequentEle = (arr) => 
	 var res =   frequentEle([2,2,3,1]);
	 document.getElementById("info73").innerHTML = res;


// 74. Find least frequent [2,2,3,3,1]. → Output: 1

     /*const = (arr) => 
	 var res =   ();
	 document.getElementById("info").innerHTML = res;*/


// 75. Find missing number [1,2,4,5]. → Output: 3

     const missigNum = (arr) => {
		 const min = Math.min(...arr);
         const max = Math.max(...arr);
         let missing = Array.from({ length: max - min + 1 }, (_, i) => i + min)
         .find(num => !arr.includes(num));
		 return missing;

	 }
	 var res =   missigNum([1,2,4,5]);
	 document.getElementById("info75").innerHTML = res;


// 76. Find duplicates [1,2,2,3,3,4]. → Output: [2,3]

     const findDuplicate = (arr) => {
		 let duplicates = arr.filter((item, index) => 
         arr.indexOf(item) !== index && arr.indexOf(item) === index
          );
         let uniqueDuplicates = [...new Set(
         arr.filter((item, index) => arr.indexOf(item) !== index)
         )];
		 return uniqueDuplicates;
	 }
	 var res =   findDuplicate([1,2,2,3,3,4]);
	 document.getElementById("info76").innerHTML = res;


// 77. Remove duplicates keep order [2,2,1,3]. → Output: [2,1,3]

     /*const removeDuplicates = (arr) => {
		  let rm = [];
          for( var ele of arr){
        if (ele !== rm){
		  rm.append(ele)
		}
		  }
    return rm;
	 }
	 var res = removeDuplicates([2,2,1,3]);
	 document.getElementById("info77").innerHTML = res;*/


// 78. Check subset [1,2] in [1,2,3,4]. → Output: true

     /*const getSubset = (arr1, arr2) => 
	 var res = getSubset([1,2], [1,2,3,4]);
	 document.getElementById("info78").innerHTML = res;*/


// 79. Check subset [2,5] in [1,2,3]. → Output: false

     /*const = (arr) => 
	 var res =   ();
	 document.getElementById("info").innerHTML = res;


// 80. Count subarrays length 2 [1,2,3]. → Output: [[1,2],[2,3]]

     /*const = (arr) => 
	 var res =   ();
	 document.getElementById("info").innerHTML = res;


// 81. Count elements greater than average [2,4,6]. → Output: 1

     /*const = (arr) => 
	 var res =   ();
	 document.getElementById("info").innerHTML = res;*/


// 82. Build cumulative sum [1,2,3]. → Output: [1,3,6]

// 83. Build cumulative product [2,3,4]. → Output: [2,6,24]

     /*const = (arr) => 
	 var res =   ();
	 document.getElementById("info").innerHTML = res;


// 84. Zig-zag print [1,2,3,4,5]. → Output: 1 5 2 4 3

     /*const = (arr) => 
	 var res =   ();
	 document.getElementById("info").innerHTML = res;


// 85. Chunk [1,2,3,4,5] size 2. → Output: [[1,2],[3,4],[5]]

     /*const = (arr) => 
	 var res =   ();
	 document.getElementById("info").innerHTML = res;*/


// 86. Reverse each string ["hi","ok"]. → Output: ["ih","ko"]

// 87. Flatten 3D array [[[1]],[[2]]]. → Output: [1,2]

     /*const = (arr) => 
	 var res =   ();
	 document.getElementById("info").innerHTML = res;


// 88. Count unique across [1,2,2,3]. → Output: 3

     /*const = (arr) => 
	 var res =   ();
	 document.getElementById("info").innerHTML = res;


// 89. Find majority element [3,3,4,2,3]. → Output: 3

     /*const = (arr) => 
	 var res =   ();
	 document.getElementById("info").innerHTML = res;*/


// 90. Sort strings by length ["hi","hello","a"]. → Output: ["a","hi","hello"]

     const sortStr = (arr) => arr.sort((a, b) => a.length - b.length);
	 var res =  sortStr(["hi","hello","a"]);
	 document.getElementById("info90").innerHTML = res;






