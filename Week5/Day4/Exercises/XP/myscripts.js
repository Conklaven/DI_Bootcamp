// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(console.log);

    async function runFetch() {
        let fetched = await fetch("https://swapi.dev/api/starships/9/")
        let response = fetched.json();
        console.log(response);
        return response
    }
    console.log(runFetch())