const loginButton = document.querySelector('.login-button');

loginButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  dataObject = {
    email: document.querySelector('#login-email').value,
    password: document.querySelector('#login-password').value
  }

  data = JSON.stringify(dataObject)

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
  .then((response) => response.text())            
  .then((text) => console.log(text))
  .catch((error) => console.log(error));

  const frm = document.getElementsByName('login-form')[0];
  frm.submit(); 
  frm.reset();  
  return false;

});