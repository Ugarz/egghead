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
        dinos: [
            { name: "Velociraptor", weight: "15 kg" },
            { name: "Triceratops", weight: "6.000 kg" },
            { name: "Stegosaurus", weight: "2.500 kg" },
        ],
        description: "<strong>Dinosaurs</strong> are very diverse group of animals of the clade <em>Dinosauria</em> that first appeared during the Triassic period."
    },
    methods: {
        addItem: function() {
            var input = document.getElementById('itemForm');
            if(input.value !== ''){
                this.dinos.push({ name: input.value })
                input.value = "";
            }
        },
        deleteItem: function(index) {
             this.dinos.splice(index, 1)
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
    }
})