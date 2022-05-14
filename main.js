
function checkAge(age) {
    return age>18 ? true : confirm("Ban chua du 18 tuoi");
  }

  function checkAge(age) {
    return age>18 || console.log("Ban chua du 18 tuoi") ;
  }
 console.log(checkAge(prompt("ban bao nhieu tuoi")))