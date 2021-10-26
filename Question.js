class Question {
    constructor() {
        this.title = createElement(h2);
        this.questioN = createElement(h4);
        this.name = createButton("ENTER YOUR NAME");
        this.answer = createButton("ENTER THE CORRECT ANSWER");
        this.submit = createButton("SUBMIT");
    }

    display() {
        this.title.html("THE ULTIMATE QUIZ");
        this.title.position(displayWidth / 2 - 50, 0);

        this.questioN.html("Question :- What is always coming, but never arrives? ");
        this.questioN.position(displayWidth / 4 - 50, 100);



    }
}