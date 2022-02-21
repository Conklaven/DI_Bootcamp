fetch('/countries')
  .then(response => response.json())
  .then(data => {
      putData(data)
  }
  )


function putData(array) {
    // let body = document.body
    // let div = document.createElement('div')
    let select = document.getElementById('test')
    // div.appendChild(body)
      for( key in array){
          let option = document.createElement('option')
          console.log(option)
          option.innerHTML = array[key].country
          option.setAttribute('value', key)
          option.setAttribute('id', array[key].country)
          console.log(select)
          select.appendChild(option)
        //   console.log(array[key].country)
      }
      
  }
