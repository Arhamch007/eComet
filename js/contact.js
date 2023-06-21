// function SendMail() {
//     var params = {
//      from_name : document.getElementById("fullname").value,
//     email_id : document.getElementById("email_id").value,
//     number_id : document.getElementById("numbere_id").value,
//     message : document.getElementById("message").value
//     }
//     emailjs.send("service_l2dn5jo","template_s2d0j01",params).then(function(res){
//         alert("success!"+ res.status);
//     })
// }

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




var btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var message = document.getElementById('message').value;
    var body = 'name: '+name+ '<br> email: '+email+ '<br> number: '+number+ '<br> message: '+message;
    Email.send({
    SecureToken : "507d8b25-6a50-45b5-821b-97a1ec68caaf",
    To : 'ecomet.technologies@gmail.com',
    From : "ddamas850@gmail.com",
    Subject : "Contact message",
    Body : body
}).then(
message => alert("Your email is send Successfully!")
);
})