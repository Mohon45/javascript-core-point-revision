function vowelsAndConsonants(s) {
  //Create Array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  //Convert String to Array
  const arr = s.split("");
  //Empty vowels and cons array
  var vowelsFound = [];
  var cons = [];
  //Push vowels and cons to their arrays
  for (var i in arr) {
    if (vowels.includes(arr[i])) {
      vowelsFound.push(arr[i]);
    } else {
      cons.push(arr[i]);
    }
  }
  //ConsoleLog so that they in order and cons follows vowels on new lines
  console.log(vowelsFound.join("\n") + "\n" + cons.join("\n"));
}
//Test, Exclude in copy
vowelsAndConsonants("javascriptloops");
