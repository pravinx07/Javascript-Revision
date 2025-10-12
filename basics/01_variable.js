const accountId = 13234;   // constant variable do not change


let accountEmail = "pravin@gmail.com";
var accountPassword = "12345";
accountCity = "Nagpur";

// accountId = 1421 // not allowed

accountEmail = "ajay@gmail.com"
accountPassword = "4321"
accountCity = "Pune"
let accountDetails;  // js gives undefined


console.log(accountId);

// provide output in table format
console.table([accountEmail, accountId, accountPassword, accountCity, accountDetails])


/*
Prefare not use var
because of issue in block scope and function scope
*/