import Vue from '../src/index';

let vm = new Vue({
    el: '#container',
    data: {
        text: 'Hello World',
        arr: [1, 2, 3],
        objArr: [{
            name: '1'
        }, {
            name: '2'
        }, {
            name: '3'
        }]
    }
});

window.vm = vm;
