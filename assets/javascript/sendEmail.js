//Code copied from Code Institute video tutorial on sending emails using EmailJS

function sendMail(contactForm) {
    emailjs.send("gmail", "contact", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "subject": contactForm.subject.value
    })
    .then(
        function(response) {
            alert("Success! Thanks for your email, we'll be in touch as soon as humanly possible!", response);
        },
        function(error) {
            alert("Sorry, but due to an error we couldn't send your message. Please complete the form carefully and try again!", error);
        }
    );
    return false;  // To block from loading a new page
}

