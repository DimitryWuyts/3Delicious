

document.getElementById("buttonFood").addEventListener("click",function () {
    var foodInput = document.getElementById("inputFood").value;


    //getting images from unsplash
    let foodImg = fetch(`https://api.unsplash.com/search/photos?page=1&query=${foodInput}&client_id=19637105d5750cc3bb2998bb15bd40378a594c315a2811753cb50b7703c4c094`)
        .then((unsplashResponse => {
            return unsplashResponse.json();
        }))
        .then(imageData => {
            foodimageAPI = imageData.results[0].urls.regular;
            console.log(foodimageAPI)
        });

    //fetching data from the API
    fetch(`https://api.edamam.com/api/food-database/parser?ingr=${foodInput}&app_id=70227da1&app_key=5d1dbda7ef08ad66aaf00a98e2d219bf`)

        .then((response => {
            return response.json();
        }))
        .then(data => {

            console.log(data);
            for (let i = 0 ; i < data.hints.length; i++) {
                // console.log(data.hints[i].food);
                let foodInput = document.getElementById("inputFood").value;
                let ingredCheck = data.hints[i].food.foodContentsLabel;
                let foodLabel = data.hints[i].food.label;
                const upper = foodInput.charAt(0).toUpperCase() + foodInput.substring(1);

                    // trying to pick the first one in the array with an ingredient list
                    if (ingredCheck === undefined && foodLabel == upper || foodLabel == foodInput) {

                        console.log("No ingredients!");

                    } else if (ingredCheck != undefined && foodLabel == upper || foodLabel == foodInput){

                        document.getElementById("ing1").innerHTML = ingredCheck;
                        console.log(ingredCheck);

                        //calling the image from unsplash
                        let cockImg = document.getElementById("cockImg");
                        cockImg.src =foodimageAPI;

                        //this will stop the loop
                        break;

                    }

            }

        });

});

document.getElementById("buttonDrink").addEventListener("click",function () {
    let drinks = document.getElementById("inputDrinks").value;


        //fetching data from the API
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinks}`)
        .then((response => {
            return response.json();
        }))
        .then(cocktaildata => {


            var cocktail = cocktaildata.drinks[0];

            document.getElementById("cockName").innerHTML = "Name: " + cocktail.strDrink;

            //getting image of the cocktail and displaying it as an image
            let cockImg = document.getElementById("cockImg");
            cockImg.src = cocktail.strDrinkThumb;

            document.getElementById("cockGlass").innerHTML = "Glass: " + cocktail.strGlass;

            document.getElementById("cockInstructions").innerHTML = "Instructions: " + cocktail.strInstructions;


    });

});
