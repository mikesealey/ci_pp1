document.addEventListener("DOMContentLoaded", function() {
  const params = new URLSearchParams(window.location.search);

  const customerName = params.get('customer-name');
  const enquiryType = params.get('enquiry-type');
  const enquiryDetails = params.get('enquiry-details');
  const email = params.get('email');

  document.getElementById('customer-name').textContent = customerName;
  document.getElementById('enquiry-type').textContent = enquiryType;
  document.getElementById('enquiry-details').textContent = enquiryDetails;
  document.getElementById('email').textContent = email;
});