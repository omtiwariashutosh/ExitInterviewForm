var typed = new Typed(".typing", {
    strings: ["", "Exit Interview Form", "Resignation"],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: true
})

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// Form data store
document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    const submitButton = document.getElementById('submitBtn');
    submitButton.disabled = true; // Disable the button

    // Create a FormData object from the form
    const formData = new FormData(this);

    // Send the data using Fetch API
    fetch('rusandata.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            alert(data); // Display the response (success or error message)
            this.reset(); // Reset the form after submission
            submitButton.disabled = false; // Re-enable the button
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
            submitButton.disabled = false; // Re-enable the button
        });
});




document.getElementById('employeeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Disable the submit button to prevent multiple submissions
    const submitButton = document.getElementById('submitBtn');
    submitButton.disabled = true;

    // Create a FormData object from the form
    const formData = new FormData(this);

    // Send the data using Fetch API
    fetch('rusandata.php', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Get the response as text
        })
        .then(data => {
            // Hide the form and show the thank you message
            document.querySelector('.form-container').style.display = 'none'; // Hide the form
            document.getElementById('thankYouContainer').style.display = 'block'; // Show the thank you container
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your feedback.');
        })
        .finally(() => {
            // Re-enable the submit button after the process is complete
            submitButton.disabled = false;
        });
});
// ***********************

