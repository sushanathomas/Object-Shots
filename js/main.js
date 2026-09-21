//Instructions: The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// Target the html, inside the html, select the element. When clicked, we are targeting that specific name/function. 

document.querySelector('button').addEventListener('click', getDrink);

// This the function you click when runnung the name of the button
    function getDrink() {

    //      The variable  / Equal (= mean an assingment) / 
        const userInput = document.querySelector('input').value;

    // So it's saying CONST URL (give me the menu), The userInput (do you have this item on the menu). 
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`;

        // fetch me information from the API website
        fetch(url)
            .then(response => response.json()) // it'll return what you asked for(it's a promise) in a json-format. 
            .then(data => {
                // .then returns the fetched data here
                if (data.drinks) {
                    document.querySelector('h2').textContent = data.drinks[0].strDrink; //place that information inside the h2
                    document.querySelector('img').src = data.drinks[0].strDrinkThumb; // show that information here inside the img tag
                    document.querySelector('h3').textContent = data.drinks[0].strInstructions; // show that infromation here inside the h3.
                } else {
                    alert('Cocktail not found!');
                }
            })
    }

