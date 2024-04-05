(function() {
    async function fetchRandomUsers() {
        try {
            const response = await fetch("https://randomuser.me/api/?results=10");
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error("Error al obtener usuarios aleatorios:", error);
            return [];
        }
    }

    async function displayRandomUsers() {
        const userListElement = document.getElementById("user-list");

        const users = await fetchRandomUsers();
        users.forEach(user => {
            const userImage = document.createElement("img");
            userImage.src = user.picture.medium;
            userImage.alt = `Foto de ${user.name.first} ${user.name.last}`;
            userListElement.appendChild(userImage);

            const nameParagraph = document.createElement("p");
            nameParagraph.textContent = `Nombre: ${user.name.first} ${user.name.last}`;
            userListElement.appendChild(nameParagraph);

            const emailParagraph = document.createElement("p");
            emailParagraph.textContent = `Correo electrónico: ${user.email}`;
            userListElement.appendChild(emailParagraph);

            const phoneParagraph = document.createElement("p");
            phoneParagraph.textContent = `Teléfono: ${user.phone}`;
            userListElement.appendChild(phoneParagraph);

            const separator = document.createElement("hr");
            userListElement.appendChild(separator);
        });
    }

    displayRandomUsers();
})();   