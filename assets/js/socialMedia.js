/* const linksSocialMedias = {
    github: "ShaTeixeira",
    instagram: "byte__dev",
    linkedin: "in/shayane-teixeira-4520b2196/",
    spotify: "user/223ondkwb5mwsg6vsdbozl6ni",
    rocketseat: "me/shayane-teixeira-06251"
};


function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`;

        alert(li.children[0].href);
    }
}

changeSocialMediaLinks(); */


/* pegar usuario no github 
function getGithubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedias.github}`;

     pegar o json - promise
    fetch(url)
        transformando em json 
        .then(response => response.json())
        armazena a resposta em json
        .then(data => {
            userName.textContent = data.name;
            userLink.href = data.html_url;
            userLogin.textContent = data.login;
        });
}

getGithubProfileInfos();*/