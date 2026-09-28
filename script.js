// ==========================================
// INTERNSHIP SEARCH AND FILTER
// ==========================================

function filterInternships() {

    // Get search box value

    let searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    // Get selected field

    let selectedField =
        document
            .getElementById("fieldFilter")
            .value;


    // Get selected location

    let selectedLocation =
        document
            .getElementById("locationFilter")
            .value;


    // Get selected work mode

    let selectedMode =
        document
            .getElementById("modeFilter")
            .value;


    // Get all internship cards

    let cards =
        document.querySelectorAll(
            ".internship-card"
        );


    // Count visible internships

    let visibleCount = 0;


    // Check every card

    cards.forEach(function(card) {


        // Get internship title

        let title =
            card
                .querySelector("h3")
                .textContent
                .toLowerCase();


        // Get company name

        let company =
            card
                .querySelector(".company")
                .textContent
                .toLowerCase();


        // Get card information

        let field =
            card.dataset.field;


        let location =
            card.dataset.location;


        let mode =
            card.dataset.mode;


        // Search condition

        let matchesSearch =
            title.includes(searchText) ||
            company.includes(searchText);


        // Field condition

        let matchesField =
            selectedField === "" ||
            field === selectedField;


        // Location condition

        let matchesLocation =
            selectedLocation === "" ||
            location === selectedLocation;


        // Work mode condition

        let matchesMode =
            selectedMode === "" ||
            mode === selectedMode;


        // Show matching cards

        if (
            matchesSearch &&
            matchesField &&
            matchesLocation &&
            matchesMode
        ) {

            card.style.display = "block";

            visibleCount++;

        }

        // Hide cards that don't match

        else {

            card.style.display = "none";

        }

    });


    // Update result count

    document.getElementById("resultCount")
        .textContent =
        visibleCount +
        " internships found";


    // Show "No Results"

    let noResults =
        document.getElementById("noResults");


    if (visibleCount === 0) {

        noResults.style.display = "block";

    }

    else {

        noResults.style.display = "none";

    }

}


// ==========================================
// APPLY BUTTON
// ==========================================

function applyInternship(internshipName) {

    alert(
        "You selected: " +
        internshipName +
        "\n\n" +
        "The application page will be created in the next step."
    );

}


// ==========================================
// CONNECT SEARCH AND FILTERS
// ==========================================

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        filterInternships
    );


document
    .getElementById("fieldFilter")
    .addEventListener(
        "change",
        filterInternships
    );


document
    .getElementById("locationFilter")
    .addEventListener(
        "change",
        filterInternships
    );


document
    .getElementById("modeFilter")
    .addEventListener(
        "change",
        filterInternships
    );