document.getElementById('form').addEventListener('submit', function(event) {
    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validate Name
    if (!name) {
      alert('Name is required.');
      isValid = false;
    }
  
    // Validate Email
    if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      isValid = false;
    }
  
    // Prevent form submission if validation fails
    if (!isValid) {
      event.preventDefault();
    }else{
        alert('Form submitted successfully.');
    }
  });
  
