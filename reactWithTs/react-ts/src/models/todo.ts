class Todo{
    text: string;
    id: string;

    constructor(inputText: string){
        this.text = inputText;
        this.id = new Date().toISOString();
    }
}

export default Todo;