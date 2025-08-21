// Logo Title Start's_______________________________

const logo_Title = document.getElementById("logo_Title");

function logoHover() {

    logo_Title.classList.add("active");

}

function logoOut() {

    logo_Title.classList.remove(`active`)

}

// Logo Title End's_______________________________


const input = document.getElementById(`user_input`);
const movies_name = document.getElementsByClassName(`movie_name`);

// console.log(movies_name.innerText);

function SearchMovie() {

    if (input.value === "" || input.value.trim() === "") {
        input.placeholder = "Enter any movie name..."
        input.classList.add(`input_error`)
    }
    else {

        const all_mvs_vsbl_cmd = "Want to visible all movies Type (Show all movies)";
        const all_mvs_vsbl = `Show all movies`;

        let movie_found = false;

        for (let i = 0; i < movies_name.length; i++) {

            // console.log(movies_name[i].innerText);

            const movies_card = movies_name[i].parentElement.parentElement.parentElement;

            const mvs_name = movies_name[i].innerText;

            if (mvs_name.includes(input.value) || mvs_name.toLowerCase().includes(input.value) || mvs_name.toUpperCase().includes(input.value)) {
                movies_card.style.display = "block"
                input.placeholder = all_mvs_vsbl_cmd
                input.classList.remove(`input_error`)
                movie_found = true;
            }
            else if (input.value === all_mvs_vsbl || input.value === all_mvs_vsbl.toUpperCase() || input.value === all_mvs_vsbl.toLowerCase()) {
                movies_card.style.display = "block"
                input.placeholder = "Enter movie name..."
                input.classList.remove(`input_error`)
                movie_found = true;
            }
            else {
                movies_card.style.display = "none"
            }

        }

        if (!movie_found) {
            input.placeholder = "Incorrect movie name..."
            input.classList.add(`input_error`)
        }

    }

}

// document.getElementById(`user_input`).addEventListener("input", () => SearchMovie() )

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        SearchMovie()
        input.value = ""
        input.focus()
    }
})