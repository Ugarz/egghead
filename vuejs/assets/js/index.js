/**
 * New component card
 * The el is the name of your component
 * The data is the structure of your store
 * The methods are the actions you can perform on this component
 */
var card = new Vue({
    el: "#card",
    data: {
        title: "Dinosaurs",
        dinosUpdated: 0,
        speciesUpdated: 0,
        dinos: [
            { name: "Velociraptor", weight: 15, quantity: 1 },
            { name: "Triceratops", weight: 6000, quantity: 2 },
            { name: "Stegosaurus", weight: 2500, quantity: 1 },
        ],
        description: "<strong>Dinosaurs</strong> are very diverse group of animals of the clade <em>Dinosauria</em> that first appeared during the Triassic period."
    },
    methods: {
        addSpecies: function(e) {
            e.preventDefault()
            var speciesName = document.getElementById('species-name');
            var speciesWeight = document.getElementById('species-weight');
            var speciesQuantity = document.getElementById('species-quantity');
            if (speciesName.value !== ''){
                this.dinos.push({
                    name: speciesName.value || 'Robert',
                    weight: speciesWeight.value || 40,
                    quantity: speciesQuantity.value || 1300
                })
                speciesName.value = "";
                speciesWeight.value = "";
                speciesQuantity.value = "";
            }
        },
        deleteSpecies: function(index) {
             this.dinos.splice(index, 1)
        },
        addDino: function (index) {
            this.dinos[index].quantity++
        },
        killDino: function (index) {
            this.dinos[index].quantity--
        },
        cleanForm: function() {
            speciesName.value = "";
            speciesWeight.value = "";
            speciesQuantity.value = "";
        }
    },
    filters: {
        capitalize: function(value){
            if(!value) return '';
            value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        undercase: function(value){
            if(!value) return '';
                value.toString();
                return value.toLowerCase();
        },
        url: function(value){
            value = value.toString();
            return "http://en.wikipedia.org/wiki/" + value;
        }
    },
    computed: {
        totalDinosaurs: function(){
            this.dinosUpdated++;
            let sum = 0;
            let dinos = this.dinos;

            for(var dino in dinos) {
                sum += dinos[dino].quantity;
            }
            return sum;
        },
        totalSpecies: function(){
            this.speciesUpdated++;
            return this.dinos.length;
        }
    }
})