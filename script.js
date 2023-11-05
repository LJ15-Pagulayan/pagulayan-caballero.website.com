// Get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const serviceSelect = document.getElementById('service');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const submitBtn = document.getElementById('submit-btn');

// Add event listener to submit button
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const name = nameInput.value;
  const email = emailInput.value;
  const service = serviceSelect.value;
  const date = dateInput.value;
  const time = timeInput.value;

  // Validate form values
  if (name === '' || email === '' || service === '' || date === '' || time === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Create appointment object
  const appointment = {
    name,
    email,
    service,
    date,
    time
  };

  // Save appointment to localStorage
  let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  appointments.push(appointment);
  localStorage.setItem('appointments', JSON.stringify(appointments));

  // Reset form
  form.reset();

  // Show success message
  alert('Appointment booked successfully!');
});