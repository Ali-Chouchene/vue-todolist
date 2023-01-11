/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni task sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no
Create almeno un task con done: true
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il task viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)
*/


//! console.log("VUE OK", Vue);

const app = Vue.createApp({
    name: "To-Do-List",
    data() {
        return {

            newText: "",
            tasks,

        }
    },
    computed: {
        // addClass(i) {
        //     if (this.tasks.done === false) {
        //         return this.tasks.doneClass = "";
        //     }
        //     else {
        //         this.tasks.doneClass = "text-decoration-line-through";
        //     }
        //     // return this.tasks.done === false ? this.tasks.doneClass = "" : this.tasks.doneClass = "text-decoration-line-through";
        // },

    },
    methods: {
        addTask() {
            if (this.newText) {
                const newTask = {
                    text: this.newText,
                    done: false,
                    doneClass: ""
                };
                this.tasks.push(newTask);
                this.resetInput();
                this.$refs.inputFocus.focus();
            }
        },
        dellTask(i) {
            this.tasks.splice(i, 1);
        },
        // addClass() {
        //     this.done = !this.done;
        //     if (this.done === false) {
        //         this.doneClass = "";
        //     }
        //     else {
        //         this.doneClass = "text-decoration-line-through";
        //     }
        // },
        doneToggle() {
            this.done = !this.done;
        },
        resetInput() {
            this.newText = "";
        }

    }

});

app.mount("#root");