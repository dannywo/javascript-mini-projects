console.clear();
console.log("Loaded");

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAlltextInput(s);

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
            name: Math.random().toString(36).substring(2, 12),
            type: Math.random().toString(36).substring(2, 12),
            category: Math.random().toString(36).substring(2, 12),
        };

        list.push(item);
    }
    console.log(list)
}

const generateCountMessage = () => {
    let msg = '',
    matches = filteredList.length;
    switch (true){
        case (matches === 0):
            msg = 'No matches found';
            break;
        case (matches === 1):
            msg = 'Showing 1 item';
            break;
        case (matches <= maxDisplayLimit):
            msg = `Showing ${matches} items`;
            break;
        default:
            msg = `Showing ${maxDisplayLimit} of ${matches} items`;
    }
}

const generateListItem = (item) => {
    let li = document.createElement('li'),
        spanName = document.createElement('span'),
        spanType = document.createElement('span'),
        spanCategory = document.createElement('span');
    spanName.classList.add('name');
    spanType.classList.add('type');
    spanCategory.classList.add('category');

    spanName.textContent = item.name;
    spanType.textContent = item.type;
    spanCategory.textContent = item.category;

    li.appendChild(spanName);
    li.appendChild(spanType);
    li.appendChild(spanCategory);

    return li;
}

const gernerateList = () => {
    let frag = document.createDocumentFragment();
    for (let i = 0; i < filteredList.length; i++) {
        if(i < maxDisplayLimit){
            let element = filteredList[i],
                li = generateListItem(element);
            frag.appendChild(li);
        }
        else break;
    }
    displayList.innerHTML = '';
    displayList.appendChild(frag);
    generateCountMessage();
}

const textMatch = (item) => {
    let searchTerm = textInput.value.toLowerCase(),
        itemText = `${item.name}${item.type}${item.category}`.toLowerCase();
    return itemText.indexOf(searchTerm) !== -1;
};

const getFilteredItems = () => {
    filteredList = list.filter(textMatch);;
    gernerateList();
};

textInput.addEventListener('keyup', getFilteredItems);

generateDummyList(100);
getFilteredItems();