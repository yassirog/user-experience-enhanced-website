
document.addEventListener('DOMContentLoaded', function() {
    const options = document.querySelectorAll('.option');

    options.forEach(option => {
        option.addEventListener('click', function() {
            // Reset de achtergrondkleur en tekstkleur van alle opties behalve de geselecteerde optie
            options.forEach(opt => {
                if (opt !== option) {
                    opt.style.backgroundColor = 'white';
                    opt.querySelector('span').style.color = '#808080';
                }
            });

            // Set de achtergrondkleur en tekstkleur van de geklikte optie naar paars en wit
            option.style.backgroundColor = '#AD97C9';
            option.querySelector('span').style.color = 'white';
        });
    });
});

// NIEUWE FUNCTIE VOOR FORM LATEN INLADEN 
const addForm = document.querySelector('form.kaas');
const successMessage = document.getElementById('successMessage');
const stakeholder = [];

addForm.addEventListener('submit', submitAddFormHandler);

function submitAddFormHandler(event) {
    console.log('form submitted!');
    const messageText = document.getElementById("name").value;

    // Vind de geselecteerde radio-input
    const selectedInput = document.querySelector('input[type="radio"]:checked');

    if (selectedInput) {
        // Haal de waarde op van de 'name' attribuut van de geselecteerde radio-input
        const selectedType = selectedInput.getAttribute("name");
        // Geef de naam weer in de console
        console.log("Geselecteerde naam: " + selectedType);
        stakeholder.push("Naam: " + messageText, "Type: " + selectedType);

        // Of toon het op een andere manier op de pagina
    } else {
        event.preventDefault();
        alert("Selecteer een type!"); // Waarschuw als er geen type is geselecteerd (kan nog verandert worden met n divje)
        return; // Stop de functie hier als er geen type is geselecteerd
    }

    // Als er een type is geselecteerd, stuur het formulier door
    successMessage.style.display = 'block';
    setTimeout(function () {
        successMessage.style.display = 'none';
    }, 5000);
    console.log(stakeholder);
    event.preventDefault();
}
    



// console.log('Type: ' + aangevinkteRadiobox);
// console.log('Naam: ' + name)


// stakeholder.push(aangevinkteRadiobox, name);



