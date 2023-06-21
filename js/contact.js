// Working with emailjs
// function sendMail() {
//   var params = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     number: document.getElementById("number").value,
//     message: document.getElementById("message").value,
//   };

//   const serviceID = "service_l2dn5jo";
//   const templateID = "template_s2d0j01";

//     emailjs.send(serviceID, templateID, params)
//     .then(res=>{
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("number").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("Your message sent successfully!!")

//     })
//     .catch(err=>console.log(err));

// }

var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var numberInput = document.getElementById("number");
  var messageInput = document.getElementById("message");

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var number = numberInput.value.trim();
  var message = messageInput.value.trim();

  // Validate input fields
  if (name === "" || email === "" || number === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Validate email format
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  // Validate number format
  var numberPattern = /^[0-9]+$/;
  if (!numberPattern.test(number)) {
    alert("Contact Number should only contain numbers.");
    return;
  }

  var body =
    "name: " +
    name +
    "<br> email: " +
    email +
    "<br> number: " +
    number +
    "<br> message: " +
    message;
  Email.send({
    SecureToken: "507d8b25-6a50-45b5-821b-97a1ec68caaf",
    To: "ecomet.technologies@gmail.com",
    From: "ddamas850@gmail.com",
    Subject: "Contact message",
    Body: body,
  }).then(function (message) {
    alert("Your email has been sent successfully!");
    // Reload page
    location.reload();
  });
});
