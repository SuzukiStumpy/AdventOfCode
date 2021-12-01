{
    let data = [
        'mxmxvkd kfcds sqjhc nhms (contains dairy, fish)',
        'trh fvjkl sbzzf mxmxvkd (contains dairy)',
        'sqjhc fvjkl (contains soy)',
        'sqjhc mxmxvkd sbzzf (contains fish)'
    ];

    let foods = {};
debugger
    data.forEach( (v) => {
        let words = v.match(/(\w)+/gi).join(',').split('contains');
        let ingredients = words[0].split(',').filter( (v) => v !== '');
        let allergens = new Set(words[1].split(',').filter( (v) => v !== ''));

        ingredients.forEach( (v) => {
            if (!foods.hasOwnProperty(v)) {
                // Food not already seen, so add food and all allergens to the map
                foods[v] = {};
                foods[v].allergens = new Set(allergens);
                foods[v].count = 1;
            } else {
                // Food already seen, so remove any allergens not in current set (ie: grab the intersection of the two)
                foods[v].allergens = new Set([...foods[v].allergens].filter( (x) => allergens.has(x)));
                foods[v].count += 1;
            }
        });
    });


    

}