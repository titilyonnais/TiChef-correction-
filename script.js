fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            let ingredientscui = '';

            element.ingredients.forEach(ing => {
                ingredientscui += `<li>${ing.quantite} ${ing.unite} ${ing.aliment}</li>`;
            });


            let etapese = '';

            element.etapes.forEach(ing => {
                etapese += `<li>${ing.descEtape}</li>`;
            });


            document.getElementById("recette-container").innerHTML += `
                <section class="container">
        <div class="card">
            <div class="flex gap16 align-center">
                <h1>${element.nom}</h1>
                
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">favorite</span></a>
                <a href="" class="little-btn"><span class="material-icons material-icons-outlined">
                    share
                    </span></a>   
                
            </div>
            <!-- 3 colonnes -->
            <div class="flex align-start gap32 mt-16">
                <!-- Partie images -->
                <div class="large-3 small-12 medium-6">
                    <div class="align-start flex gap16">
                        <div class="large-12">
                            <img src="${element.img[0]}" alt="" class="responsive">
                            <div class="legende">${element.nom}</div>
                        </div>
                        <div class="large-4">
                            <img src="${element.img[1]}" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="${element.img[2]}" alt="" class="responsive">
                        </div>
                        <div class="large-4">
                            <img src="${element.img[3]}" alt="" class="responsive">
                        </div>    
                    </div>
                </div>
                <!-- Partie ingredients-->
                <div class="gap32 large-3 small-12 medium-6">
                    <div class="flex gap16">
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            restaurant
                            </span>${element.portions}</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            alarm
                            </span>${element.tempPreparation}</p>
                        <p class="etiquette"><span class="material-icons material-icons-outlined">
                            local_fire_department
                            </span>${element.tempCuisson}</p>
                    </div>
                    <div>
                        <h2>Détails</h2>
                        <p class="text-orange">${element.desc}</p>
                    </div>
                    <div>
                        <h2>Ingrédients</h2>
                        <ul>
                            ${ingredientscui}
                        </ul>
                    </div>

                </div>
                <!-- Partie etapes -->
                <div class="large-6 small-12 medium-6">
                    <h2>Etapes</h2>
                    <ol>
                        ${etapese}
                    </ol>
                </div>
            </div>
        </div>
    </section>
`
        });
    })