const name ="ritik"
const repoCount =50

// console.log(name + repoCount + "value");

console.log(`hellow my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("hitesh-hs-com")

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
comnsole.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString =gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.group(anotherString);

const newStringone ="hitesh   "
console.log(newStringone);
console.log(newStringone.trim());

const uyrl ="https://hitesh.com/hitsh%20choudary"

console.log(url.replace("%20","-"))

console.log(url.include("hitesh"))

console.log(gameName.split("-"));