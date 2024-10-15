// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    // Function to show error message
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = message;
        input.classList.add('input-error');
    }

    // Function to clear error message
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = '';
        input.classList.remove('input-error');
    }

    // Email validation regex
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Phone number validation regex (allows digits, spaces, dashes, parentheses)
    function isValidPhone(phone) {
        const re = /^\+?[\d\s\-()]{7,15}$/;
        return re.test(phone);
    }

    // Form validation
    function validateForm() {
        let isValid = true;

        // Get all input fields
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const password = document.getElementById('password');

        // Validate First Name
        if (firstName.value.trim() === '') {
            showError(firstName, 'First Name is required.');
            isValid = false;

        } else {
            clearError(firstName);
        }

        // Validate Last Name
        if (lastName.value.trim() === '') {
            showError(lastName, 'Last Name is required.');
            isValid = false;
        } else {
            clearError(lastName);
        }

        // Validate Email
        if (email.value.trim() === '') {
            showError(email, 'Email is required.');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email.');
            isValid = false;
        } else {
            clearError(email);
        }

        // Validate Phone Number
        if (phone.value.trim() === '') {
            showError(phone, 'Phone Number is required.');
            isValid = false;
        } else if (!isValidPhone(phone.value.trim())) {
            showError(phone, 'Please enter a valid phone number.');
            isValid = false;
        } else {
            clearError(phone);
        }

        // Validate Password
        if (password.value.trim() === '') {
            showError(password, 'Password is required.');
            isValid = false;
        } else if (password.value.trim().length < 8) {
            showError(password, 'Password must be at least 8 characters.');
            isValid = false;
        } else {
            clearError(password);
        }

        return isValid;
    }

    // Handle form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            // Collect form data
            const formData = {
                first_name: document.getElementById('firstName').value.trim(),
                last_name: document.getElementById('lastName').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone_number: document.getElementById('phone').value.trim(),
                password: document.getElementById('password').value.trim()
            };

            // Log the form data object to the console
            console.log(formData);

            // Optionally, you can reset the form after successful submission
            form.reset();
        }
    });
});