let btn = document.getElementById("btn");

async function runFetch() {
    let num = Math.floor(Math.random() * 60) + 1;
    loadingImage()
    let fetched = await fetch(`https://www.swapi.tech/api/people/${num}`)
    let response = fetched.json();
    console.log(response);
    return response
}

btn.addEventListener("click", start)

function start() {
    runFetch()
        .then(next => {

            let characterName = document.createTextNode(next.result.properties.name)
            let characterHeight = document.createTextNode(next.result.properties.height)
            let characterGender = document.createTextNode(next.result.properties.gender)
            let characterBirth_Year = document.createTextNode(next.result.properties.birth_year)
            homeWorld(next.result.properties.homeworld)
                .then(world => {
                    let characterHomeworld = document.createTextNode(world.result.properties.name)
                    console.log(characterHomeworld)
                    let array = {
                        "Name": characterName.data,
                        "Height": characterHeight.data,
                        "Gender": characterGender.data,
                        "Birth Year": characterBirth_Year.data,
                        "Home": characterHomeworld.data
                    }
                    insert(array)
                })


        })
}

function loadingImage() {
    loading.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    Name.innerHTML = ""
    Height.innerHTML = ""
    Home.innerHTML = ""
    let birth = document.getElementById("Birth Year")
    birth.innerHTML = ""
    Gender.innerHTML = ""

}

async function homeWorld(api) {
    let characterHomeworld = await fetch(api)
    let response = characterHomeworld.json();
    console.log(response);
    return response
}

function insert(a) {
    loading.innerHTML =""
    let parent = document.getElementById("result")
    console.log(a)

    for (let key in a) {
        let section = document.getElementById(`${key}`)
        console.log(section)
        section.append(`${key} : ${a[key]}`)
        parent.appendChild(section)
        // console.log(key)
        // console.log(a[key])
    }

    // a.forEach(element => {
    //     let section = document.createElement("p")
    //     section.appendChild(element)
    //     parent.appendChild(section)
    // })
    // for (let data of a){
    //     let text = document.createTextNode(data)
    //     console.log(text)

    //     console.log(data)
    //     let section = document.createElement("p")
    //     section.textContent =data
    //     parent.appendChild(section)

    // }

}