
loadData = (meal) => {
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    fetch(url)
        .then(Response => Response.json())
        .then(Data => display(Data.meals))
}


display = (meals) => {

    let meal_container = document.getElementById('meal_container');
    meal_container.innerHTML = ``

    meals.forEach((meal) => {

        console.log(meal)

        let div = document.createElement('div');



        div.innerHTML = `
        
        <div class="card w-full bg-base-100 shadow-xl">
                <figure  style="height: 250px;"><img src="${meal.strMealThumb
            }" alt="Shoes" /></figure>
                <div class="card-body">
                  <h2 class="card-title text-xl md:text-base font-bold">${meal.strMeal}</h2>
                  <p>${meal.strInstructions.slice(0, 140)}</p>
                
                </div>
              </div>
        
        
        `

        meal_container.appendChild(div);

    })

}



document.getElementById('search_btn').addEventListener('click', () => {


    //  input field
    let input_field = document.getElementById('input_field').value;


    loadData(input_field)

    document.getElementById('input_field').value = '';
})


loadData('fish');



let show_input_field = document.getElementsByClassName('show_input_field');

for (let show of show_input_field) {



    show.addEventListener('click', (event) => {

        document.getElementById('input_field').value = event.target.innerText;
       



    })

}