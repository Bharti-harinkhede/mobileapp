
// JavaScript Practice Tasks – 40 Advanced Exercises

// =======================
// LOOPS & ITERATION
// =======================
// 1. Sum all numbers in an array using a loop. → Example: sumLoop([2,3,6]) → 11
	  const sumLoop = (arr) => {
		  var sum = 0;
		  for(var i = 0; i < arr.length; i++){
			    sum += arr[i];
		  }
		  return sum;
	  };
	  
	  var res = `Sum all numbers in an array using a loop = ${sumLoop([2,3,6])}`;
	  document.getElementById("info1").innerHTML = res;

// 2. Count how many items in an array are greater than 10. → Example: countGreaterThanTen([75,15,22,3]) → 2

    const countGreaterThanTen = (arr) =>{
		ct = 0;
		for(var i = 0; i < arr.length; i++){
			if(arr[i] > 10 ){
				ct++;
			}
		}
		return ct;
		
	}
	var res = countGreaterThanTen([75,15,22,3]) ;
	document.getElementById("info2").innerHTML = res;


// 3. Return all even numbers in an array using a for loop. → Example: findEven([1,2,3,4,5]) → [2,4]

     const findEven = (arr) =>{
		 var array = [];
		 for(const ele of arr ){
			 if(ele % 2 == 0){
				 array.push(ele);
			 }
		 }
		return array; 
	 }
	 var res = findEven([1,2,3,4,5]);
	 document.getElementById("info3").innerHTML = res;
// 4. Find the average value in an array using a loop. → Example: averageLoop([5,8,11]) → 8

      const averageLoop = (arr) => {
		  var sum = sumLoop(arr);
		  //for(const ele of arr){ sum += ele ;}
		  var avg = sum / arr.length
		  return avg;
	  }
	  
	  var res = averageLoop([5,8,11]);
	 document.getElementById("info4").innerHTML = res;
	 
// 5. Reverse a string using a loop (no built-in reverse). → Example: reverseLoop("hello") → "olleh"
 
    const  reverseLoop = () => {
		
	}
    var res = ;
	 document.getElementById("info4").innerHTML = res;

// 6. Print the multiplication table for a number (1 to 10). → Example: multiplicationTable(3) prints 3,6,9,…30
// 7. Return true if a number appears at least twice in an array. → Example: hasDuplicate([1,2,2,4]) → true
// 8. Remove duplicates from an array using a loop. → Example: dedupeLoop([1,2,2,3]) → [1,2,3]
// 9. Calculate the factorial of a number using a loop. → Example: factorial(5) → 120
// 10. Count the vowels in a string using a loop. → Example: countVowels("engineer") → 4

// =======================
// OBJECTS & DATA MANIPULATION
// =======================
// 11. Return the keys of an object as an array. → Example: objectKeys({a:1,b:2}) → ["a","b"]
// 12. Merge two objects (no spread syntax). → Example: mergeObjs({x:1},{y:2}) → {x:1, y:2}
// 13. Count properties in an object whose value is a number. → Example: countNumbers({a:1,b:"hi",c:12}) → 2
// 14. Extract all string values from an object. → Example: stringsInObj({a:"one",b:2,c:"two"}) → ["one","two"]
// 15. Change all keys of an object to uppercase. → Example: keysToUpper({cat:7,dog:4}) → {CAT:7, DOG:4}
// 16. Sum the values of all properties in an object. → Example: sumValues({a:10,b:20}) → 30
// 17. Find the largest value in an object’s properties. → Example: maxValue({a:6,b:9,c:3}) → 9
// 18. Filter out properties whose value is null. → Example: removeNulls({a:3,b:null}) → {a:3}
// 19. Swap the keys and values in an object. → Example: swapObj({one:"1", two:"2"}) → {"1":"one","2":"two"}
// 20. Given an array of objects, return those with a property value over 50. → Example: filterObjects([{a:75},{a:42}]) → [{a:75}]

// =======================
// DATES & TIME
// =======================
// 21. Return today’s date as "YYYY-MM-DD". → Example: today() → "2025-08-12"
// 22. Calculate age based on a birth date string. → Example: getAge("1998-05-23") → 27
// 23. Find how many days between two dates. → Example: daysBetween("2025-08-01","2025-08-12") → 11
// 24. Return the day of the week for a date. → Example: dayOfWeek("2025-08-12") → "Tuesday"
// 25. Check if a date is in the past. → Example: isPast("2021-01-01") → true
// 26. Add 10 days to a date string. → Example: addDays("2025-08-01",10) → "2025-08-11"
// 27. Convert a date string to JavaScript Date object. → Example: stringToDate("2025-08-12") → Date object
// 28. Return the current time as "HH:MM:SS". → Example: currentTime() → "22:07:00"
// 29. Check if a year is a leap year. → Example: isLeapYear(2024) → true
// 30. Find what month (number) a date string is in. → Example: getMonth("2025-08-12") → 8

// =======================
// REAL-LIFE CALCULATIONS
// =======================
// 31. Calculate Body Mass Index (BMI) from weight (kg) and height (m). → Example: bmi(70,1.75) → 22.86
// 32. Convert Celsius to Fahrenheit. → Example: toFahrenheit(30) → 86
// 33. Calculate interest earned (simple interest). → Example: interest(1000,5,2) → 100
// 34. Format a number as currency. → Example: toCurrency(1485.78) → "$1,485.78"
// 35. Return tax amount for income bracket (basic logic). → Example: tax(50000) → 5000
// 36. Estimate delivery time in days (shipping + processing). → Example: deliveryEstimate(3,2) → 5
// 37. Calculate grade percentage from points earned and total. → Example: calculateGrade(85,100) → 85
// 38. Return the average rating from an array of ratings. → Example: averageRating([4,5,3,5]) → 4.25
// 39. Convert kilometers to miles. → Example: kmToMiles(10) → 6.2137
// 40. Calculate the tip for a bill given a percentage. → Example: tip(250,15) → 37.5
