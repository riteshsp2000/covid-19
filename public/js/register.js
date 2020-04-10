const registerButton = document.querySelector('.register-button');

registerButton.addEventListener('click', (e) => {
  e.preventDefault();

  dataObject = {
    email: document.querySelector('#register-email').value,
    password: document.querySelector('#register-password').value,
    confirmPassword: document.querySelector('#register-confirm-password').value
  }

  if (dataObject.password === dataObject.confirmPassword) {
    data = JSON.stringify(dataObject)

    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then((response) => response.text())
    .then((text) => console.log(text))
    .catch((error) => console.log(error));

    var frm = document.getElementsByName('register-form')[0];
    frm.submit(); 
    frm.reset();  
    return false;

  } else {
    window.alert('The passwords do not match')
  }

});