class StringBuilder {
    #value;

    constructor(value){
        this.#value = value;
    }

    getValue(){
        return this.#value;
    }

    padStart(str){
        this.#value = `${str}${this.#value}`;
    }

    padEnd(str){
        this.#value = `${this.#value}${str}`;
    }

    padBoth(str){
        this.#value = `${str}${this.#value}${str}`;
    }
}


