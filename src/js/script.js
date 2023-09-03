const URL_BASE = "https://swapi.dev/api/people/";

function fetchPeopleData() {
    fetch(URL_BASE)
        .then((response) => response.json())
        .then((data) => {
            const loadingMessage = document.getElementById("loading-message");
            loadingMessage.style.display = "none";

            const peopleCards = document.getElementById("people-cards");

            data.results.forEach((person) => {
                const card = document.createElement("div");
                card.className = "card";

                const name = document.createElement("span");
                name.textContent = `Name: ${person.name}`;
                card.appendChild(name);

                const mass = document.createElement("span");
                mass.textContent = `Mass: ${person.mass}`;
                card.appendChild(mass);

                const hairColor = document.createElement("span");
                hairColor.textContent = `Hair Color: ${person.hair_color}`;
                card.appendChild(hairColor);

                const skinColor = document.createElement("span");
                skinColor.textContent = `Skin Color: ${person.skin_color}`;
                card.appendChild(skinColor);

                const eyeColor = document.createElement("span");
                eyeColor.textContent = `Eye Color: ${person.eye_color}`;
                card.appendChild(eyeColor);

                const birthYear = document.createElement("span");
                birthYear.textContent = `Birth Year: ${person.birth_year}`;
                card.appendChild(birthYear);

                const gender = document.createElement("span");
                gender.textContent = `Gender: ${person.gender}`;
                card.appendChild(gender);

                peopleCards.appendChild(card);
            });
        })
        .catch((error) => {
            console.error("Ocorreu um erro ao buscar os dados da API:", error);
        });
}

fetchPeopleData()