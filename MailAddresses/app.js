let text;

console.log("---------------------------");
console.log("email addresses");
console.log("---------------------------");

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('teachers.csv'),
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    text = line.split(";");
    console.log(getMailaddress(text[1], text[0]));
}).on('close', () => {console.log("---------------------------");});

let firstName;
let lastName;

function getMailaddress(firstName, lastName){
    let email;

    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();

    lastName = lastName.replace("ä", "ae");
    lastName = lastName.replace("ö", "oe");
    lastName = lastName.replace("ü", "ue");

    firstName = firstName.replace("ä", "ae");
    firstName = firstName.replace("ö", "oe");
    firstName = firstName.replace("ü", "ue");

    email = firstName.charAt(0) + "." + lastName + "@htl-leonding.ac.at";

    return email;
}

