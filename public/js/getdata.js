const getData = document.querySelector('#get-data');

var dataObject

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

