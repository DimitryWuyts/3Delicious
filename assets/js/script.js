document.getElementById("buttonFood").addEventListener("click",function () {
    let food = document.getElementById("inputFood").value;

//
    //fetching data from the API
    fetch(`https://api.edamam.com/api/food-database/parser?ingr=${food}&app_id=70227da1&app_key=5d1dbda7ef08ad66aaf00a98e2d219bf`)

        .then((response => {
            return response.json();
        }))
        .then(data => {
            console.log(data);
            console.log(data.text);
            console.log(data.hints[0].food.label);
            console.log(data.hints[0].food.nutrients);

            let labelName = data.hints[0].food.label;
            document.getElementById("mealName").innerHTML = labelName;

        });


});

document.getElementById("buttonDrink").addEventListener("click",function () {
    let drinks = document.getElementById("inputDrinks").value;

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)
    .then((response => {
        return response.json();
    }))
    .then(cocktaildata => {
        var cocktail = cocktaildata.drinks[0];

        document.getElementById("cockName").innerHTML = "Name: " + cocktail.strDrink;

        let cockImg = document.getElementById("cockImg");
        cockImg.src = cocktail.strDrinkThumb;

        document.getElementById("cockGlass").innerHTML = "Glass: " + cocktail.strGlass;

        document.getElementById("cockInstructions").innerHTML = "Instructions: " + cocktail.strInstructions;

        console.log(cocktail)
        console.log(cockImg)

        // console.log(cocktaildata);
        // console.log(cocktaildata.drinks[0].strDrink);
        // console.log(cocktaildata.drinks[0].strIngredient1);
        // console.log(cocktaildata.drinks[0].strIngredient2);
        // console.log(cocktaildata.drinks[0].strGlass);
        // console.log(cocktaildata.drinks[0].strDrinkThumb);

    });

});
