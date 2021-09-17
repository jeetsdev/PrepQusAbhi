let btnFetch = document.querySelector("#btn-fetch");
let outputArea = document.querySelector(".output-area");

btnFetch.addEventListener("click", () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(res => {
            if (!res.ok) {
                throw Error("An error occured");
            }
            return res.json();

        })
        .then(data => {
            console.log(data);
            let usersLists = data.results;
            console.log(usersLists);
            usersLists.forEach((user, index) => {
                // let usersNames = user.name;
                // let usersGender = user.gender;
                let para = document.createElement('p');
                para.innerHTML = `Name is : ${user.name.title} ${user.name.first} ${user.name.last} and Gender is : ${user.gender}`;
                outputArea.appendChild(para);
                if (user.gender === "female") {
                    para.style.color = 'pink';
                }
            });
        })
        .catch(err => {
            console.log(err.message);
        })
})

