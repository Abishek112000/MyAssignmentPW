let gendertype = "male";

function printgender() {
  let color = "Brown";

  if (gendertype === "female") {
    var age = 30;
    let color = "pink";
    console.log("color inside the block if condition", color);
  } else {
    var age = 35;
    console.log("color inside the block else condition", color);
  }
  console.log(age);
}
printgender();
console.log("Gender Type:", gendertype);
