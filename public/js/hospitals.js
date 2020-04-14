const addHospital = document.querySelector('.add-hospital');
const updateHospital = document.querySelector('.update-hospital');

addHospital.addEventListener('click', (e) => {
  e.preventDefault();

  dataObject = {
    name: document.querySelector('.name').value,
    location: document.querySelector('.location').value,
    patient: document.querySelector('.patients').value,
    coronaPatient: document.querySelector('.corona-patients').value,
    criticalPatient: document.querySelector('.critical-patients').value,
    reqProd1: document.querySelector('.req-prod-1').value,
    reqProd2: document.querySelector('.req-prod-2').value,
    reqProd3: document.querySelector('.req-prod-3').value
  };

  if (dataObject.name && dataObject.location && dataObject.patient && dataObject.coronaPatient && dataObject.criticalPatient && dataObject.reqProd1 && dataObject.reqProd2 && dataObject.reqProd3) {
    data = JSON.stringify(dataObject);

    fetch('/hospitals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then((response) => {
      response.json()
      window.alert('Hospital has been added')
    })
    .catch((error) => console.log(error));

    // window.alert('Hospital added');

    var frm = document.getElementsByName('hospitals-form')[0];
    frm.submit(); 
    frm.reset();  
    return false;
  } else {
    window.alert('Please fill all the spaces.');
  }

  
});