class ListBinding {
    constructor(element) {
        this.listItem = element;
        this.textList = ['Ganesh', 'Murugan'];
    }

    static createChildItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        li.classList = 'hello';
        return li;
    }

    update() {
        while(this.listItem.firstChild) {
            this.listItem.removeChild(this.listItem.firstChild);
        }
        for(const text of this.textList) {
            this.listItem.appendChild(ListBinding.createChildItem(text));
        }
    }

    push(item) {
        this.textList.push(item);
        this.update();
    }

    pop() {
        this.textList.pop();
        this.update();
    }
}

