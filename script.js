 // JavaScript code goes here

    // Example of form validation
    document.getElementById('quiz-form').addEventListener('submit', function(event) {
        // Prevent the form from submitting if validation fails
        if (!validateForm()) {
          event.preventDefault();
        }
      });
  
      function validateForm() {
        // Validate student name
        var nameInput = document.getElementById('student-name');
        if (nameInput.value.trim() === '') {
          alert('Please enter your name.');
          nameInput.focus();
          return false;
        }
  
        // Validate student email
        var emailInput = document.getElementById('student-email');
        if (emailInput.value.trim() === '') {
          alert('Please enter your email.');
          emailInput.focus();
          return false;
        }
  
        // Validate birth date
        var birthDateInput = document.getElementById('birth-date');
        if (birthDateInput.value.trim() === '') {
          alert('Please enter your date of birth.');
          birthDateInput.focus();
          return false;
        }
  
        // Additional validation logic can be added here
  
        // If all validations pass, return true
        return true;
      }