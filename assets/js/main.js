// https://api.github.com/users?per_page=8

// https://www.azur-web.com/astuces/javascript-requette-http-ajax

// https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user


window.onload = _ => {
    console.log("page loaded");


    const headers = new Headers({
        "Content-Type": "application/json",
        "x-api-key": "DEMO-API-KEY"
    });

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=8", requestOptions)
        .then(response => response.json())
        .then(result => {
            let usersHTML = "";
            result.forEach(user => {
                console.log(user);
                usersHTML += `<div class="div--card">`;
                usersHTML += `<img src="${user.url}" width=100 />`;
                usersHTML += `<p class="p--name">${user.breeds[0].name}</p>`;
                usersHTML += `<p class="p--description">${user.breeds[0].temperament}</p>`;
                usersHTML += `</div>`;
            })
            document.querySelector('#div--users').innerHTML = usersHTML;
        })
        .catch(error => console.log('error', error));
}