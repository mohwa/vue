require('../assets/sass/app.scss');

const card = new Vue({
    el: '#card',
    data: {
        title: "CARD",
        items: [
            {id: '1'},
            {id: '2'},
            {id: '3'},
            {id: '4'},
            {id: '5'},
            {id: '6'},
            {id: '7'}
        ]
    }
});


export default card;

