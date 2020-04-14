const getData = document.querySelector('#get-data');

getData.addEventListener('click', (e) => {
  e.preventDefault();

  fetch('/index/hospitals')
  .then((response) => {
    return response.json(); 
  })
  .then((data) => {
    console.log(data);
    // dataJSON = JSON.stringify(data)
    console.log(data.hospital1.name)
  })
  .catch((e) => {
    console.log(e)
  })
})


var dataObject = {
  hospital_1 : {
    name: 'Deenanath Mangeshkar Hospital',
    location: 'Karve Nagar, Pune',
    patients: 5201,
    coronaPatients: 32,
    criticalPatients: 4,
    prod1 : 200,
    prod2 : 300,
    prod3 : 400,
    priority
  },
  hospital_2 : {
    name: 'Aditya Birla Hospital',
    location: 'Pimpri Chinchwad',
    patients: 4200,
    coronaPatients: 26,
    criticalPatients: 5,
    prod1 : 500,
    prod2 : 100,
    prod3 : 300,
    priority
  },
  hospital_3 : {
    name: 'Sahyadri Hospital',
    location: 'Deccan Gymkhana, Pune',
    patients: 3500,
    coronaPatients: 31,
    criticalPatients: 223,
    prod1 : 200,
    prod2 : 100,
    prod3 : 400,
    priority
  },
  hospital_4 : {
    name: 'Sancheti Hospital',
    location: 'Shivaji Nagar, Pune',
    patients: 4100,
    coronaPatients: 21,
    criticalPatients: 2,
    prod1 : 200,
    prod2 : 200,
    prod3 : 100,
    priority
  },
  hospital_5 : {
    name: 'Ruby Hall Hospital',
    location: 'Sasoon Road, Pune',
    patients: 3800,
    coronaPatients: 12,
    criticalPatients: 0,
    prod1 : 400,
    prod2 : 100,
    prod3 : 400,
    priority
  }
}
