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
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    number: document.getElementById("number").value,

  };

  const serviceID = "service_l2dn5jo";
  const templateID = "template_s2d0j01";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}