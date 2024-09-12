

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