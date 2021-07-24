console.clear();
console.log("Loaded");

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

(function(){
    let list = [],
        filteredList = [],
        maxDisplayLimit = 10,
        textInput = $('.text-filter'),
        displayList = $('.list'),
        countMessage = $('.count-message');

    const generateDummyList = (itemCount) => {
        if(!itemCount) return;
        for (let i = 0; i < itemCount; i++) {
            let item = {
                name: Math.random().toString(36).substr(2, 10),
                type: Math.random().toString(36).substr(2, 10),
                category: Math.random().toString(36).substr(2, 10),
            };

            list.push(item);
        }
    }
});