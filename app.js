const input = document.getElementById(`user_input`);
const movies_name = document.getElementsByClassName(`movie_name`);

// console.log(movies_name.innerText);


function SearchMovie() {

    if (input.value === "" || input.value.trim() == "") {
        input.placeholder = `Enter Correct Movie Name`;
        document.getElementById(`user_input`).classList.add(`input_error`);
    }
    else {

        const input_filter = input.value.toLowerCase();

        let i;
        for (i = 0; i < movies_name.length; i++) {

            const movies = movies_name[i].innerText.toLowerCase()

            if (movies.includes(input_filter)) {
                console.log(movies_name[i].innerText);
                movies_name[i].parentElement.parentElement.style.display = "block";
                input.placeholder = "To visible all movies type 'Show All Movies'";
            }
            else if (input_filter === "Show All Movies" || input_filter === "show all movies") {
                movies_name[i].parentElement.parentElement.style.display = "block";
                input.placeholder = `Enter movie name...`
            }
            else {
                movies_name[i].parentElement.parentElement.style.display = "none";
                input.placeholder = `Movie name is incorrect`
                // console.log("Movie Name is Incorrect");
            }

        }
    }

}

document.getElementById(`user_input`).addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        SearchMovie()
        input.value = ""
    }
})