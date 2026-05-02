let name = {
    firstName : "Shalini",
    lastName : "Susmitha",
}

let printFullName = function (hometown,state) {
    console.log(this.firstName + " "+ this.lastName + " "+ hometown +" "+ state);
}

printFullName.call(name,"Piduguralla","AndhraPradesh");

let name2 = {
    firstName : "Krishna",
    lastName: "Yadavas"
}

printFullName.call(name2,"Punjab","Punjab");


//apply method is same as call but the arguments should be passed in array
printFullName.apply(name2,["Mumbai","Maharashtra"])


//if we want to pass some more arguments we can pass into printFullName like hometown  r state

//bind method will make exact copy of function and we can store it in a variable and later we can use it

let printName = printFullName.bind(name,"Shirdi","Maharashtra")
console.log(printName);
printName();




// let Ashotataram = {
//     monday: "Shivayya",
//     tuesday: "AnjaneyaSwami",
//     wednesday: "Vinayaka",
//     thursday: "SaiBaba",
//     friday: "Durga Amma",
//     saturday: "Venkateswara Swamy",
//     sunday: "Subramanyeswara Swamy"
// }


// let all = function () {
//     console.log(this.monday + " " + this.tuesday+ " " + this.wednesday+ " " +this.thursday+ " " +this.friday+ " " +this.saturday+ " " +this.sunday)

// }

// all.call(Ashotataram);


