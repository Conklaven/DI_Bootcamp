const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

    (() =>{
        body = document.body
        let newDiv = document.createElement("ul")
        body.appendChild(newDiv)
        newDiv.setAttribute("id", "myUL")
        // newDiv.style.border = '1px solid black'
    })()

let robotSearch =[]

// let btn = document.getElementById("submit")
// btn.addEventListener("click", robotSort)
// function robotSort() {
//     searchtext = document.getElementById("searchbar")
//     // console.log(sea
//     console.log(searchtext.value)
//     robotSearch =robots.filter(e => e.name.indexOf(searchtext.value) != 0 )
    
//     console.log(robotSearch)
// }

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


 function createRobots(){
        body = document.body
        let parent = document.getElementById("myUL");
        robots.forEach((e) =>{
            let robotDiv = document.createElement("li")
            let robotImg = document.createElement("img")
            let robotName = document.createElement("a")
            let name = document.createTextNode(e.name)
            let email = document.createTextNode(e.email)
            let robotEmail =document.createElement("div")
            robotEmail.setAttribute("id", "email")
            robotImg.src = e.image
            robotDiv.appendChild(robotImg)
            robotName.appendChild(name)
            robotEmail.appendChild(email)
            parent.appendChild(robotDiv)
            robotDiv.appendChild(robotName)
            robotDiv.appendChild(robotEmail)
            robotName.setAttribute("id", "name")
            robotImg.style.height ="70%"
            robotImg.style.margin ="auto"
            robotImg.style.marginTop = "10px"
            robotImg.style.background = "darkBlue"
            robotDiv.classList.add("robotCard")
            robotDiv.style.backgroundColor= "lightBlue"
            console.log(e)
        })
    }
    createRobots()
