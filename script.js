function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
  };

  const serviseId = "service_y7nemaw";
  const templateId = "template_quxm2vi";

  emailjs
    .send(serviseId, templateId, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      location.href =
        "https://www.instagram.com/reel/CmlTmTeBhfM/?utm_source=ig_web_copy_link";
    })
    .catch((err) => console.log(err));
}
