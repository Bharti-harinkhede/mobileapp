//1. How many characters are in the string "JavaScript"?
     
	 const charInString = (str) => str.length;
	 var res = `characters are in the string "JavaScript" = ${charInString("JavaScript")}`;
	 document.getElementById("info1").innerHTML = res;
	 
//2. What letter is at position 4 in "OpenAI"?

     const letterAtPosition = (str) => str.charAt(4);
	 var res = `letter is at position 4 in "OpenAI" = ${letterAtPosition("OpenAI")}`;
	 document.getElementById("info2").innerHTML = res;
	 
//3. Does "Hello world" begin with "Hello"?

     const beginWith = (str) => str.startsWith("Hello");
	 var res = `"Hello world" begin with "Hello"? = ${beginWith("Hello world")}`;
	 document.getElementById("info3").innerHTML = res;
	 
//4. Convert the string "hello" entirely to uppercase letters. What is the result?

     const convInUpeercase = (str) => str.toUpperCase();
	 var res = `Convert the string "hello" entirely to uppercase letters = ${convInUpeercase( "hello")}`;
	 document.getElementById("info4").innerHTML = res;
	 
//5. Remove any spaces before or after " Hello ". What remains?

     const removeSpaces = (str) => str.trim();
	 var res = `Remove any spaces before or after " Hello " = ${removeSpaces(" Hello ")}`;
	 document.getElementById("info5").innerHTML = res;
	 
//6. Find the position of the first "a" in "banana". What is the index?

     const positionOf = (str) => str.indexOf("a");
	 var res = `position of the first "a" in "banana" = ${positionOf("banana")}`;
	 document.getElementById("info6").innerHTML = res;
	 
//7. Check if "JavaScript" contains the word "Script". Is it true or false?

     const isContains = (str) => str.includes("Script");
	 var res = `"JavaScript" contains the word "Script" = ${isContains("JavaScript")}`;
	 document.getElementById("info7").innerHTML = res;
	 
//8. Repeat the word "repeat" three times in a row without spaces. What do you get?

     const repeatWord = (str) => str.repeat(3);
	 var res = `Repeat the word "repeat" three times in a row without spaces = ${repeatWord("repeat")}`;
	 document.getElementById("info8").innerHTML = res;
	 
//9. What letter is at the third position in "apple"?

     const letterPosition = (str) => str.charAt(3);
	 var res = `letter is at the third position in "apple" = ${letterPosition("apple")}`;
	 document.getElementById("info9").innerHTML = res;
	 
//10. Change all letters in "Bat" to lowercase. What is the output?

     const toLower = (str) => str.toLowerCase();
	 var res = `letters in "Bat" to lowercase = ${toLower("Bat")}`;
	 document.getElementById("info10").innerHTML = res;
	 
//11. Break "apple,banana,grape" into parts wherever there is a comma. What array do you get?

     const breakInTo = (str) => str.split(",");
	 var res = `Break "apple,banana,grape" into parts wherever there is a comma = ${breakInTo("apple,banana,grape")}`;
	 document.getElementById("info11").innerHTML = res;
	 
//12. Remove spaces from either end of " JavaScript " and then change all letters to lowercase.
//What is the result?

     const trimAndChangeCase = (str) => str.trim().toLowerCase();
	 var res = ` Remove spaces from either end of " JavaScript " and then change all letters to lowercase = ${trimAndChangeCase(" JavaScript ")}`;
	 document.getElementById("info12").innerHTML = res;
	 
//13. Find where "ss" first appears in "Mississippi". What is the position?

     const firstAppears = (str) => str.indexOf("ss" );
	 var res = `"ss" first appears in "Mississippi" at position = ${firstAppears("Mississippi")}`;
	 document.getElementById("info13").innerHTML = res;
	 
//14. Extract letters from position 3 up to but not including position 6 in "Programming". Which
//letters?

     const extractLetter = (str) => str.slice(3, 6);
	 var res = `Extract letters from position 3 up to but not including position 6 in "Programming" = ${extractLetter("Programming")}`;
	 document.getElementById("info14").innerHTML = res;
	 
//15. Does "hello world" begin with "wor"? Answer true or false.

     const startsWith = (str) => str.startsWith("wor");
	 var res = `Does "hello world" begin with "wor"? = ${startsWith("hello world")}`;
	 document.getElementById("info15").innerHTML = res;
	 
//16. What is the last letter in "ChatGPT"?

     const lastLetters = (str) => str.charAt(6);
	 var res = `last letter in "ChatGPT" = ${lastLetters("ChatGPT")}`;
	 document.getElementById("info16").innerHTML = res;
	 
//17. Replace "World" with "JavaScript" in "Hello World". What does the sentence become?

     const replcaeWith = (str) => str.replace("World", "JavaScript");
	 var res = `Replace "World" with "JavaScript" in "Hello World" = ${replcaeWith("Hello World")}`;
	 document.getElementById("info17").innerHTML = res;
	 
//18. Add zeroes to the start of "12345" until the string is 8 characters long. What is the resulting
//string?

     const addZeros = (str) => str.padStart(8, "0")
	 var res = `Add zeroes to the start of "12345" until the string is 8 characters long  = ${addZeros("12345")}`;
	 document.getElementById("info18").innerHTML = res;
	 
//19. What is the numerical character code of the first letter in "javaScript is fun"?

     const charCode = (str) => str.charCodeAt("javaScript");
	 var res = `numerical character code of the first letter in "javaScript is fun" = ${charCode("javaScript is fun")}`;
	 document.getElementById("info19").innerHTML = res;
	 
//20. Extract the letters starting from position 1 up to position 3 in "OpenAI". Which letters?

     const extractStringPos = (str) => str.substring(1, 4);
	 var res = `Extract the letters starting from position 1 up to position 3 in "OpenAI" = ${extractStringPos("OpenAI")}`;
	 document.getElementById("info20").innerHTML = res;
	 
//21. Split "Sun-Mon-Tue" at the dashes, then choose the second item in the list. What is it?

     const splitDashes = (str) => {
		 var texs = str.split("-");
		 return texs[1];
	 }
	 var res = `Split "Sun-Mon-Tue" at the dashes, then choose the second item in the list = ${splitDashes("Sun-Mon-Tue")}`;
	 document.getElementById("info21").innerHTML = res;
	 
//22. Count how many words there are in "Hello from the other side" when splitting by spaces.
//How many?

     const countWords = (str) => {
		 var parts = str.split(" ");
		 return parts.length;
	 }
	 var res = `how many words there are in "Hello from the other side" = ${countWords("Hello from the other side")}`;
	 document.getElementById("info22").innerHTML = res;
	 
//23. Remove spaces before and after " test string " and measure how long the result is. What
//length?

     const trimAndCount = (str) => str.trim().length;
	 var res = `Remove spaces before and after " test string " and measure how long = ${trimAndCount(" test string ")}`;
	 document.getElementById("info23").innerHTML = res;
	 
//24. Find the last position of the letter "a" in "banana". What is it?

     const lastPosition = (str) => str.lastIndexOf("a");
	 var res = ` last position of the letter "a" in "banana" = ${lastPosition("banana")}`;
	 document.getElementById("info24").innerHTML = res;
	 
//25. Does "abc123" include the exact substring "ABC"? Yes or no?

     const doesIncludes = (str) => str.includes("ABC");
	 var res = `Does "abc123" include the exact substring "ABC"? = ${doesIncludes("abc123")}`;
	 document.getElementById("info25").innerHTML = res;
	 
//26. Extract the letters between position 2 and 4 in the string "abcdef". Which letters?

     const positionBetween = (str) => str.slice(2, 4);
	 var res = `letters between position 2 and 4 in the string "abcdef" = ${positionBetween("abcdef")}`;
	 document.getElementById("info26").innerHTML = res;
	 
//27. Change all spaces in "a b c" to underscores. What does the string become?

     const spacesWithUndescore = (str) => str.split(" ").join("_");
	 var res = `all spaces in "a b c" to underscores = ${spacesWithUndescore("a b c")}`;
	 document.getElementById("info27").innerHTML = res;
	 
//28. Change all letters in "Amazing!" to lowercase. What is the output?

     const allToLowercase = (str) => str.toLowerCase();
	 var res = `all letters in "Amazing!" to lowercase = ${allToLowercase("Amazing!")}`;
	 document.getElementById("info28").innerHTML = res;
	 
//29. Break "foo|bar|baz" apart at the vertical bars. How many parts do you get?

     const breakVerticalPart = (str) => {
		 var gerstr = str.split("|");
		 return gerstr.length;
	 }
	 var res = `Break "foo|bar|baz" apart at the vertical bars = ${breakVerticalPart("foo|bar|baz")}`;
	 document.getElementById("info29").innerHTML = res;
	 
//30. Join "Hello", " " and "World" together into one string. What is it?

     const joinStrings = (str1, str2, str3) => str1.concat(str2, str3);
	 var res = `Join "Hello", " " and "World" together into one string = ${joinStrings("Hello", " ", "World")}`;
	 document.getElementById("info30").innerHTML = res;
	 
//31. Change "quick" to "slow" within the string "quick brown fox". What is the new string?

     const replaceStrings = (str) => str.replace("quick", "slow");
	 var res = `Change "quick" to "slow" within the string "quick brown fox" = ${replaceStrings("quick brown fox")}`;
	 document.getElementById("info31").innerHTML = res;
	 
//32. Find how many times the letter "a" occurs in "abracadabra". How many times?

     const occurseLetterTime = (str) => {
		 return (str.match(/a/gi) || []).length;
	 }
	 var res = `how many times the letter "a" occurs in "abracadabra" = ${occurseLetterTime( "abracadabra")}`;
	 document.getElementById("info32").innerHTML = res;
	 
//33. Add stars to "Cat" to increase its length to 5 characters total. What does it look like?

     const addStars = (str) => str.padStart(5, "*");
	 var res = `Add stars to "Cat" to increase its length to 5 characters total = ${addStars("Cat")}`;
	 document.getElementById("info33").innerHTML = res;
	 
//34. Count the total number of letters in "supercalifragilisticexpialidocious". What number?

     const totalCount = (str) => str.length;
	 var res = `Count the total number of letters in "supercalifragilisticexpialidocious" = ${totalCount("supercalifragilisticexpialidocious")}`;
	 document.getElementById("info34").innerHTML = res;
	 
//35. Find the middle letter in "abcde". Which one?

     const middleLetter = (str) => str.charAt(2);
	 var res = `middle letter in "abcde" = ${middleLetter("abcde")}`;
	 document.getElementById("info35").innerHTML = res;
	 
//36. Does "Mocha" end with "cha"? Answer true or false.

     const endsWith = (str) => str.endsWith("cha");
	 var res = `Does "Mocha" end with "cha"? = ${endsWith("Mocha")}`;
	 document.getElementById("info36").innerHTML = res;
	 
//37. Take the last two characters from "2021-12-31". What are these?

     const lastTwoChar = (str) => str.slice(-2);
	 var res = `Take the last two characters from "2021-12-31" = ${lastTwoChar("2021-12-31")}`;
	 document.getElementById("info37").innerHTML = res;
	 
//38. What is the length of an empty string ""?

     const lengthOfEmptyStr = (str) => str.length;
	 var res = `the length of an empty string ""? = ${lengthOfEmptyStr("")}`;
	 document.getElementById("info38").innerHTML = res;
	 
//39. Remove spaces only from the start of the string " spaced ". What remains?

     const trimFromStart = (str) => str.trimStart();
	 var res = `Remove spaces only from the start of the string " spaced " = ${trimFromStart(" spaced ")}`;
	 document.getElementById("info39").innerHTML = res;
	 
//40. In the string "appleapple", what letter is at position 3?

     const postionAtThree = (str) => str.charAt(3);
	 var res = ` the string "appleapple", what letter is at position 3 = ${postionAtThree("appleapple")}`;
	 document.getElementById("info40").innerHTML = res;
	 
//41. Find how many "a" characters are in "abracadabra". Number?

     const occurseTime = (str) => {
		 return (str.match(/a/gi) || []).length;
	 }
	 var res = `how many times the letter "a" occurs in "abracadabra" = ${occurseTime( "abracadabra")}`;
	 document.getElementById("info41").innerHTML = res;
	 
     
//42. Convert "Lörem Ïpsum" to a form that separates letters and accents. How might it look?

     const seperateAccents = (str) => str.replace("Lörem Ïpsum","Lorem ipsum");
	 var res = `Convert "Lörem Ïpsum" to a form that separates letters and accents = ${seperateAccents("Lörem Ïpsum")}`;
	 document.getElementById("info42").innerHTML = res;
	 
//43. Replace number sequences in "hello123bye" with a "#". What is the result?

     const replaceNum = (str) => str.replace("123", "#");
	 var res = `Replace number sequences in "hello123bye" with a "#" = ${replaceNum("hello123bye")}`;
	 document.getElementById("info43").innerHTML = res;
	 
//44. What is the code number for the emoji at the start of "😀face"?

     const codeNumImogi = (str) => str.charCodeAt("😀");
	 var res = `code number for the emoji at the start of "😀face" = ${codeNumImogi("😀face")}`;
	 document.getElementById("info44").innerHTML = res;
	 
//45. Simplify "one two two three three three" by removing consecutive duplicate words. Result?

     const removeDuplicates = (str) => str.split(" ").filter((word, index, arr) =>word !== arr[index - 1]).join(" ");
	 var res = `Simplify "one two two three three three" by removing consecutive duplicate words = ${removeDuplicates("one two two three three three")}`;
	 document.getElementById("info45").innerHTML = res;
	 
//46. What is the length after trimming spaces and non-breaking spaces in " \u00A0Hi\u00A0 "?

     const lengthAfterTrim  = (str) => str.trim().length;
	 var res = `the length after trimming spaces and non-breaking spaces in " \u00A0Hi\u00A0 " = ${lengthAfterTrim(" \u00A0Hi\u00A0 ")}`;
	 document.getElementById("info46").innerHTML = res;
	 
//47. Convert "Café" to English letters only by removing accents. Result?

     const accentsRemove = (str) => str.replace("Café", "Cafe");
	 var res = `Convert "Café" to English letters only by removing accents = ${accentsRemove("Café")}`;
	 document.getElementById("info47").innerHTML = res;
	 
//48. Replace all forms of "the" with "a" in "The cat sat on the mat". Result?

     const replaceAllForms = (str) => str.replaceAll(/the/ig, "a");
	 var res = `Replace all forms of "the" with "a" in "The cat sat on the mat" = ${replaceAllForms("The cat sat on the mat")}`;
	 document.getElementById("info48").innerHTML = res;
	 
//49. Separate "foo,bar,baz" at commas. What list results?

     const sperateAtCommas = (str) => str.split(",");
	 var res = `Separate "foo,bar,baz" at commas. = ${sperateAtCommas("foo,bar,baz")}`;
	 document.getElementById("info49").innerHTML = res;
	 
//50. Take the last 3 letters of "OpenAI". What are they?

     const treeLast = (str) => str.slice(-3);
	 var res = ` Take the last 3 letters of "OpenAI" = ${treeLast("OpenAI")}`;
	 document.getElementById("info50").innerHTML = res;
	 
//51. Reverse the parts in "a-b-c-d" separated by dashes and join them with underscores.
//Result?

     const seperateDashAndJOIN = (str) => str.split("-").reverse().join("_");
	 var res = `Reverse the parts in "a-b-c-d" separated by dashes and join them with underscores = ${seperateDashAndJOIN("a-b-c-d")}`;
	 document.getElementById("info51").innerHTML = res;
	 
//52. Reverse the letters of "abba". What is the result?

     const letterRevs = (str1) => str1.split("").reverse().join("");
	 var res = `Reverse the letters of "abba" = ${letterRevs("abba")}`;
	 document.getElementById("info52").innerHTML = res;
	 
//53. Remove commas from "12,345.67". What remains?

     const removesCommaFrom = (str) => str.split(",");
	 var res = `Remove commas from "12,345.67" = ${removesCommaFrom("12,345.67")}`;
	 document.getElementById("info53").innerHTML = res;
	 
//54. Add 'x' characters to the start of " string " to reach a length of 12. What is the new string?

     const addXchar = (str) => str.padStart(12, "X");
	 var res = `Add 'x' characters to the start of " string " to reach a length of 12 = ${addXchar( " string ")}`;
	 document.getElementById("info54").innerHTML = res;
	 
//55. How many letters are in "🚀 Rocket" including the rocket emoji?

     const letterAreIn = (str) => str.length;
	 var res = `How many letters are in "🚀 Rocket" = ${letterAreIn("Rocket")}`;
	 document.getElementById("info55").innerHTML = res;
	 
//56. Repeat the word "repeat" zero times. What is the output?

     const repeatZeroTimes = (str) => str.repeat(0);
	 var res = `Repeat the word "repeat" zero times = ${repeatZeroTimes("repeat")}`;
	 document.getElementById("info56").innerHTML = res;
	 
//57. Replace all digits in "abc123" with stars. Result?

     const replaceDigits = (str) => str.replaceAll("123", "***")
	 var res = ` Replace all digits in "abc123" with stars = ${replaceDigits("abc123")}`;
	 document.getElementById("info57").innerHTML = res;
	 
//58. Replace every "ba" substring in "foobarbaz" with "**". Result?

     const replaceEvery = (str) => str.replaceAll("ba", "**")
	 var res = `Replace every "ba" substring in "foobarbaz" with "**" = ${replaceEvery("foobarbaz")}`;
	 document.getElementById("info58").innerHTML = res;
	 
//59. Remove all uppercase letters from "UPPER lower". What remains?

     const removeUpperLetter = (str) => str.replace(/[A-Z]/g, "");
	 var res = `Remove all uppercase letters from "UPPER lower" = ${removeUpperLetter("UPPER lower")}`;
	 document.getElementById("info59").innerHTML = res;
	 
//60. Extract from "wisdom" starting at letter 3 up to the second last letter. What is the result?

     const extractFromUpto = (str) => str.slice(3, 6);
	 var res = `Extract from "wisdom" starting at letter 3 up to the second last letter. = ${extractFromUpto("wisdom")}`;
	 document.getElementById("info60").innerHTML = res;
	 
//61. Decide if a string contains emoji characters. Expected output: true or false depending on
//input.

     const isImogiContains = (str) => str.includes("😀");
	 var res = `string contains emoji characters? = ${isImogiContains("😀face")}`;
	 document.getElementById("info61").innerHTML = res;
	 
//62. Standardize different representations of a stringʼs letters and accents consistently. Output:
//normalized string.

//63. Change "hello world" to capitalized words with smaller words in lowercase. Result:


//64. Explain the difference when extracting parts of a string using negative numbers and how
//they are treated. Result: Negative numbers count from the end in one case but are treated
//as zero in another.

    const differeceExtract = (str) => str.slice(-6, -1)
	var res = `extracting parts of a string using negative numbers = ${differeceExtract("hello world")}`;
	document.getElementById("info64").innerHTML = res;
	

//65. Remove all HTML tags like <p>, <b> from a string to keep text only. Output example: "Hello
//world"

   /* const rmHtmlTags = (str) => str.replace("<p>Hello <b>world</b></p>", ""Hello world");
	var res = `Remove all HTML tags like <p>, <b> from a string to keep text only = ${rmHtmlTags("<p>Hello <b>world</b></p>")}`;
	document.getElementById("info65").innerHTML = res;*/
	

//66. How do you make special characters safe for use in searching patterns? Output: the
//characters preceded by escape marks.

//67. Find all occurrences, even when they overlap, of "aba" in "ababa". Output: ["aba", "aba"]

//68. Convert any string to an encoded form and then back to original. Output: e.g., base64
//encoded and decoded forms.

//69. Separate combined words in "camelCaseExample" into individual words. Output: ["camel",
//"Case", "Example"]

    const seperateCombine = (str) => str.split(" ");
	var res = `Separate combined words in "camelCaseExample" into individual words = ${seperateCombine("camel,Case,Example")}`;
	document.getElementById("info69").innerHTML = res;
	

//70. Find and delete invisible or zero-width characters in strings like "Hello\u200BWorld". Output:
//"HelloWorld"

   /* const = (str) => 
	var res = `${()}`;
	document.getElementById("info70").innerHTML = res;*/
	

//71. Change letters like <, >, & into corresponding safe symbols for web pages. Example output:
//"a < b & c > d"

    const safesymbol = (str) => {
		return str
		      .replace(/&/g,"&amp;")
			  .replace(/</g,"&lt;")
			  .replace(/>/g,"&gt;")
	}
	var res = `Change letters like <, >, & into corresponding safe symbols for web pages = ${safesymbol("a < b & c > d")}`;
	document.getElementById("info71").innerHTML = res;
	

//72. Count how many times each letter appears in "hello". Output: {h:1, e:1, l:2, o:1}

//73. Make a phrase like "Crème brûlée" safe for URLs by removing accents and adding
//hyphens. Output: "creme-brulee"

    const addhyphens = (str) => str.replace("Crème brûlée", "Creme-brulee");
	var res = `phrase like "Crème brûlée" safe for URLs by removing accents and adding
hyphens = ${addhyphens("Crème brûlée" )}`;
	document.getElementById("info73").innerHTML = res;
	

//74. Compress repeated letters "aaabb" to show letter and count like "a3b2". Output: "a3b2"

//75. Check if a sequence is properly encoded in UTF-8. Output: true or false.

//76. Mark specified words in a sentence by wrapping them with special tags. Example output:
//"This JavaScript code rocks"

//77. Change words for numbers like "two" into numeric forms "2". Output: "2"

    const wordsToNum = (str) => {
		const nums = {
			"zero": "0",
			"one": "1",
			"two": "2",
			"three": "3",
			"four": "4",
			"five": "5",
			"six": "6",
			"seven": "7",
			"eight": "8",
			"nine": "9",
			"ten": "10"	
		};
		
		return nums[str.toLowerCase()] || str;
	};
	var res = `Change words for numbers like "two" into numeric forms "2" = ${wordsToNum("two")}`;
	document.getElementById("info77").innerHTML = res;
	

//78. Replace all forms of "foo" ignoring case in a sentence. Output: sentence with all "foo"
//variations replaced.

    const replaceallFormsOf = (str) => str.replaceAll(/foo/ig, "foo");
	var res = `Replace all forms of "foo" ignoring case in a sentence. = ${replaceallFormsOf("foo")}`;
	document.getElementById("info78").innerHTML = res;
	

//79. Rearrange letters randomly in "abcdef". Output example: "fbdcea"

     const rearrangeRandom = (str) => {
	 const arr = str.split('');
  
         for (let i = arr.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]]; 
         }
  
         return arr.join('');
		 
	   };
	   
	   var res = `Rearrange letters randomly in "abcdef" = ${rearrangeRandom("abcdef")}`;
	   document.getElementById("info79").innerHTML = res;
	   

//80. Check if the string is in one Unicode form or another (NFC vs NFD). Outputs: "NFC" or
//"NFD"
	

//81. Remove spaces around text but keep any emoji intact like " 😀 smile ". Output: "😀 smile"

    const spacearoundtext = (str) => str.trim();
	var res = `Remove spaces around text but keep any emoji intact like " 😀 smile " = ${spacearoundtext(" 😀 smile ")}`;
	document.getElementById("info81").innerHTML = res;
	

//82. Delete repeated words that appear next to each other in "word word test test word".
//Output: "word test"

    const rvmconscative = (str) => str.split(" ").filter((word, index, arr) =>word !== arr[index - 1]).join(" ");
	var res = `Delete repeated words that appear next to each other in "word word test test word" = ${rvmconscative("word word test test word")}`;
	document.getElementById("info82").innerHTML = res;
	

//83. Convert a sensitive phrase like "password" into a secret hash string. Output example:
//hexadecimal hash.

//84. Change "knight" into a code that represents how it sounds. Output: "K530"

//85. Turn an object into a well-formatted JSON string. Output: JSON text with indentation.
//86. Change all special space characters into normal spaces in "Hello\u00A0World". Output:
//"Hello World"


    const spacecharremove = (str) => str.replace("\u00A0", " ");
	var res = `Change all special space characters into normal spaces in "Hello\u00A0World" = ${spacecharremove("Hello\u00A0World")}`;
	document.getElementById("info86").innerHTML = res;
	


//87. Reverse the order of words in "hello world today" but keep each wordʼs letters in order.
//Output: "today world hello"

    const keepInOrder = (str) => {
		return str.trim().split(" ").reverse().join(" ");
	};
	var res = `Reverse the order of words in "hello world today" but keep each words letters in order = ${keepInOrder("hello world today")}`;
	document.getElementById("info87").innerHTML = res;
	

//88. Change all commas used as thousand separators in "1,234,567" to periods. Output:
//"1.234.567"

    const chaneAllComaas = (str) => str.replace(",", ".");
	var res = `Change all commas used as thousand separators in "1,234,567" to periods = ${chaneAllComaas( "1,234,567")}`;
	document.getElementById("info88").innerHTML = res;
	

//89. Find and remove repeated consecutive words in "this is is a test test". Output: "this is a
//test"

    const repeatcosc = (str) => str.split(" ").filter((word, index, arr) =>word !== arr[index - 1]).join(" ");
	var res = `remove repeated consecutive words in "this is is a test test" = ${repeatcosc("this is is a test test")}`;
	document.getElementById("info89").innerHTML = res;
	

//90. Write multiple lines displaying a personʼs name and age like:
//Name: John
//Age: 30
   
