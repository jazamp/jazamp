let JSON = '{"fname" : "Sam","lname":"Smith"}';
let obj = JSON.parse(JSON);
 
console.log(typeof(obj));
    
let obj2 = { 
    fname : "Jack",
    lname : "Smith"
};
let json2 = JSON.stringify(obj2);
console.log(json2);