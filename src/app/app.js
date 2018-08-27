require('../assets/sass/app.scss');

const card = new Vue({
    el: '#card',
    data: {
        title: "CARD",
        items: [],
        listUpdateCount: -1,
        input: '',
        colorClassName: 'blue-color',
        backgroundColor: '',
        disabled: false,
        total: 0
    },
    filters: {
        addPrefix: function(v = ''){
            return `prefix ${v}`;
        }
        ,
        addSuffix: function (v = '') {
            return `${v} suffix`;
        },
        lowercase: function(v = ''){
            return v.toString().toLowerCase();
        },
        uppercase: function (v = '') {
            return v.toString().toUpperCase();
        }
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
        },
        changeColorClassName: function () {
            this.colorClassName = 'red-color';
        },
        changeInputButtonDisabled: function () {
            this.disabled = !this.disabled;
        },
        submit: function () {
            console.log('ajax 호출 시작!!');
        }
    },
    watch: {
        // v-model 에 바인딩된 input watch 는 onchange 이벤트 시점에 발생한다.(angularJS 와 동일)
        input: function (v = '') {

            console.log(v); // input.value
            this.input = v;
            // value 값이 변경될때마다, 배경 색상이 변경되는걸로 변경하기!!
            this.backgroundColor = 'red';
        }
    },
    computed: {
        // 함수 실행 결과가 바인딩한다.
        totalCount: function () {

            const items = this.items;

            this.listUpdateCount++;

            return items.length;
        },
        changeBackGroundColor: function () {
            return {
                "background-color": this.backgroundColor
            };
        }
    }

});

const app = new Vue({
    el: '#app',
    data: {
        checked: true,
        radioValue: '',
        selectValue: '2',
        input: '',
        message: ''
    },
});

const exRadioComponent = new Vue({
    el: '#ex_component',
    data: {
        childCurrentRadioValue: '',
        items: [
            {text: '1', value: '1'},
            {text: '2', value: '2'},
            {text: '3', value: '3'},
            {text: '4', value: '4'}
        ]
    },
    methods: {
        parentMethod: function (v = '') {

            this.childCurrentRadioValue = v;
            // console.log(this.items);
        }
    },
    components: {
        "bx-radio": {
            props: ['text', 'value'],
            template: '<span><label><span>{{ text }}</span><span><input type="radio" name="radio_1" v-bind:value="value" v-on:click="childMethod" /></span></label></span>',
            methods: {
                childMethod: function () {
                    this.$emit('callparentmethod', this.value);
                }
            }
        }
    }
});


const dynamicComponent1 = {
    template: '<div>dynamicComponent1</div>'
};

const dynamicComponent2 = {
    template: '<div>dynamicComponent2</div>'
};

const dynamicComponentView = new Vue({
    el: '#dynamic_component_view',
    data: {
        currentView: 'dynamicComponent1',
    },
    methods: {
        toggleComponent: function () {
            this.currentView = this.currentView === 'dynamicComponent1' ? 'dynamicComponent2' : 'dynamicComponent1';
        }
    },
    components: {
        dynamicComponent1: dynamicComponent1,
        dynamicComponent2: dynamicComponent2,
    }
});




export default card;

