"use strict";

const FullName = "Jakob Falkenberg Hansen";

const firstSpace = FullName.indexOf(" ");
const lastSpace = FullName.indexOf(" ", firstSpace + 1);

const firstName = FullName.substring(0, firstSpace);
const middleName = FullName.substring(firstSpace, 16);
const lastName = FullName.substring(lastSpace, 23);

console.log(FullName.length);
console.log(`First name is: ${firstName}`);
console.log(`Middle name is: ${middleName}`);
console.log(`Last name is: ${lastName}`);
