function functionPrintInfo(name, age)  { 


var info = name + age;
   
return info;

}

console.log(functionPrintInfo("John ", 23));
console.log(functionPrintInfo("Michael ", 43));

module.exports = functionPrintInfo;

