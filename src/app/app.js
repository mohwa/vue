require('../assets/sass/app.scss');

const card = new Vue({
    el: '#card',
    data: {
        title: "CARD",
        items: []
    },
    methods: {
        addItem: function () {

            const input = document.querySelector('#card .item-value');

            if (!input.value) return;

            const items = this.items;

            items.push({id: items.length, text: input.value});

            input.value = '';
        },
        deleteItem: function (index) {
            this.items.splice(index, 1);
        }
    }

});




export default card;

