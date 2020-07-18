function calculateAge(birthYear) {
    return 2018 - birthYear;
};

let jhonYear = calculateAge(1990);
let mikeYear = calculateAge(1988);
let maryYear = calculateAge(1994);

console.log(jhonYear, mikeYear, maryYear);

function yearsUntilRetirement(year, firstName){
    let age = calculateAge(year);
    let retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + " retires in " + retirement + " years");
    } else {
        console.log(firstName + " is already retired");
    }
}

yearsUntilRetirement(1990, "john");
yearsUntilRetirement(1988, "mike");
yearsUntilRetirement(1994, "mary");