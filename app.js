// document.getElementById('registration-form').addEventListener('submit' ,function (event){
//     event.preventDefault();
//     var fullName =document.getElementById('full-name').value;
//     var email = document.getElementById('email-address').value;
//     var phoneNumber = document.getElementById('phone-number').value;
//     var birthDate = document.getElementById('birth-date').value;
//     var gender = document.querySelector('input[name="gender"]).:checked') .value; 

//     var formData =
//     Full Name: ${fullName}
//     Email Address : ${email}
//     Phone Number: ${phoneNumber}
//     Birth Date  : ${birthDate}
      
//     document.getElementById('form-data').textContent = formData;
    
// }

function text(event){
event.preventDefault()
    
var fullName =document.getElementById('fullName').value;
var email =document.getElementById('email-address').value;
var phoneNumber =document.getElementById('phone-number').value;
var birthDate =document.getElementById('birth-date').value;
// var gender =document.querySelector('input[name="gender"]):checked').value;
console.log(fullName);
console.log(email);
console.log(phoneNumber);
console.log(birthDate);

var output = document.getElementById('output');
output.innerHTML = `

<p>Name : ${fullName}</p>
<p>email : ${email}</p>
<p>phoneNumber : ${phoneNumber}</p>
<p>birthDate : ${birthDate}</p>

`;

}



// function insertValue(){
//     var FullName = document.getElementById
//     ("FullName").value;

//     var Email Address= document.getElementById
//     ("Email Adress").value;

//     var email = document.getElementById
//     ("email").value;

//     var phone Number = document.getElementById
//     ("phone Number").value;

//     var BirthDate = document.getElementById
//     ("BirthDate").value;

//     var Gender = document.getElementById
//     ("Gender").value;


//     alert( "Your Full Name = " +  name  + " \nYour User Name = " + userName+ " \nYour Email = " + email +  " \nYour Moblie Number = "+ phone+  "\nYour New Password = " + password+ "\nYour Confirm Password = " + confirmPassword );
// }




// document.getElementById('registration-form').addEventListener('submit', function (event) {
//     event.preventDefault();

//     var fullName = document.getElementById('full-name').value;
//     var email = document.getElementById('email-address').value;
//     var phoneNumber = document.getElementById('phone-number').value;
//     var birthDate = document.getElementById('birth-date').value;
//     var gender = document.querySelector('input[name="gender"]:checked').value;
  
//     var formData = `
//       Full Name: ${fullName}
//       Email Address: ${email}
//       Phone Number: ${phoneNumber}
//       Birth Date: ${birthDate}
//       Gender: ${gender}

//     `;

//     document.getElementById('form-data').textContent = formData;
// }