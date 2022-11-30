
/*Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

Наприклад:
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i*/

const characters ='erfdcgvhjkbjkljkhgbhjvgvb8967867867hjkbhjghj';

function getRandomNumber() {
   for (let i = 0; i < characters.length; i++){
  }
  return Math.floor(Math.random() * (characters.length));
}

function generateKey(length, characters) {
  let key ='';
  for (let i = 0; i < length; i++) {
    key += characters[getRandomNumber()];
}
return key;
}   
const key = generateKey(16,characters);
console.log(key);



