let checkAnagram = (str1, str2) => {


let string1 = str1.toLowerCase();
console.log(string1);

let string2 = str2.toLowerCase();
console.log(string2);


let str1_array = string1.split("")
// console.log(str1_array);
let str2_array = string2.split("")
console.log(str2_array);






str1_array.sort();
console.log(str1_array);

str2_array.sort();
console.log((str2_array));

    if (JSON.stringify(str1_array) == JSON.stringify(str2_array)) {
      return true
    } else {
      return false

    }

}

console.log(checkAnagram("The Morse Code", "Here come dots"))
