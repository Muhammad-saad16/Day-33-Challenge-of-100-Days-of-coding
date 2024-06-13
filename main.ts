//           🚀 Day 33 Challenge: Start Coding! 🚀


//Question 97:
/// Write a function that returns the current date in the format "DD-MM-YYYY".


function getDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log(getDate()); // Shows 13-6-2024





// Question 98:
// Create a JavaScript snippet that calculates and logs how many days are left until New Year.


function getDaysLeft() {
    let today = new Date();
    let newYear = new Date(today.getFullYear() + 1, 0, 1);
    return Math.ceil((newYear.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

console.log(getDaysLeft()); // Shows 202



// Question 99:
//Generate a date object representing your next birthday and log it to the console.

function getBirthday() {
    let today = new Date();
    let birthday = new Date(today.getFullYear()+1,1, 16); // (we write =1 because month will start 0)
    return birthday;
}
const nextBirthday = getBirthday(); 

console.log(nextBirthday.toLocaleDateString());
