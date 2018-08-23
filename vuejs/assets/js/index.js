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
        items: [
            { text: "Velociraptor" },
            { text: "Triceratops" },
            { text: "Brutosaurus" },
        ],
        content: "<strong>Dinosaurs</strong> are very diverse group of animals of the clade <em>Dinosauria</em> that first appeared during the Triassic period."
    },
    methods: {
        addItem: function() {
            var input = document.getElementById('itemForm');
            if(input.value !== ''){
                this.items.push({ text: input.value })
                input.value = "";
            }
        },
        deleteItem: function(index) {
             this.items.splice(index, 1)
        }
    }
})