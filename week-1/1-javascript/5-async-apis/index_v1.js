
// E.g

//-------------------------------
// Trainer module
//-------------------------------

const trainer = {
    getSubject() {
        //... 3s
        return "subject-1";
    }
}

//-------------------------------
// Student module
//-------------------------------

let student = {
    learn() {
        console.log("student - request subject on trainer");
        const subject = trainer.getSubject(); // pull / sync / blocking-call
        console.log("student got subject :  " + subject)
        console.log("student with other work.....")
    }
}

student.learn();





