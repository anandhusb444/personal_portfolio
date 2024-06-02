function sendMail(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    emailjs.send('service_ehh6dgn', 'template_qhu55ew', params)
    .then(function(response) {
        alert('SUCCESS!', response.status, response.text);
    }, function(error) {
        alert('FAILED...', error);
    });
}