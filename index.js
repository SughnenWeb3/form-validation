document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const message = document.getElementById('message');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const fullname = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const password = document.getElementById('password').value;
      const dob = document.getElementById('dob').value;
  
      
      message.style.display = "block";
      message.style.color = "red";
      message.textContent = "";
  
      
      if (!fullname || !email || !phone || !password || !dob) {
        message.textContent = "All fields are required.";
        return;
      }
  
      const emailFormat = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i;
      if (!email.match(emailFormat)) {
        message.textContent = "Enter a valid email address.";
        return;
      }
  
      if (password.length < 7) {
        message.textContent = "Password must be at least 7 characters.";
        return;
      }
  
      const specialCharFormat = /[!@#$%^&*(),.?":{}|<>]/;
      if (!specialCharFormat.test(password)) {
        message.textContent = "Password must include at least one special character.";
        return;
      }
  
      
      const user = { fullname, email, phone, dob };
      localStorage.setItem("userInfo", JSON.stringify(user));
  
      message.style.color = "green";
      message.textContent = "Form submitted successfully!";
  
      form.reset();
    });
  });
  