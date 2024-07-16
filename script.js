document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Validate form
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }
  
    // Prepare email parameters
    var templateParams = {
      name: name,
      email: email,
      message: message
    };
  
    // Log the template parameters to ensure they are correct
    console.log('Template Parameters:', templateParams);
  
    // Send email
    emailjs.send("service_8vg6jo4","template_tvtoi4f", templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
      }, function(error) {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
      });
  });
  