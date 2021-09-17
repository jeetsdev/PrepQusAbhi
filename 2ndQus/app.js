let btnFetch = document.querySelector("#btn-fetch");
let outputName = document.querySelector(".output-name");

btnFetch.addEventListener('click', () => {
    fetch("https://randomuser.me/api/?results=10")
        .then(res => {
            if (!res.ok) {
                throw Error("An error occured");
            }
            return res.json();
        })
        .then(data => {
            let users = data.results;
            let usersAges = [];
            let usersNames = [];
            users.forEach(user => {
                usersAges.push(user.dob.age);
                usersNames.push(user.name);
            });
            usersNames.forEach((user, index) => {
                outputName.style.display = 'block';
                let para = document.createElement("p");
                para.innerHTML = `Name : ${user.first} ${user.last} and age is ${usersAges[index]}`
                outputName.appendChild(para);
                if (usersAges[index]>=45) {
                    para.style.color = 'green';
                }

            })
            console.log(data);
        })
        .catch(err => {
            console.log(err.message);
        })


})

