const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { email, password } = event.currentTarget;
    if (!email.value || !password.value) {
        return alert("Uzupełnij wszystkie pola");
    } else {
        const result = { email: email.value, password: password.value};
        console.log(result);
    }
    event.currentTarget.reset();
});
form.addEventListener("submit", Submit);


//nie wypisuje w konsoli danych użytkowanika z logowania
//ani hasła

// function operateSubmit(event) {
//     event.preventDefault();
//     const {email, password} = event.currentTarget;
//     if (email.value === "" || password === "") {
//         return alert("Uzupełnij wszystkie pola");
//     }
// };

// form.addEventListener("submit", operateSubmit);

