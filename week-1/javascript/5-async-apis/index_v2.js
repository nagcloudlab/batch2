
// Using Promise Api

//-------------------------------
// Trainer module
//-------------------------------

const trainer = {
    getSubject() {
        const promise = new Promise((resolve, reject) => {
            //..
            setTimeout(() => {
                //console.log("training resolving promise...");
                //resolve("subject-1") // push 

                console.log("trainer rejecting promise")
                reject("not totay, in next class")
            }, 3000)
        });
        return promise;
    }
}

//-------------------------------
// Student module
//-------------------------------

let student = {
    learn() {
        console.log("student - request subject on trainer");
        const promise = trainer.getSubject();
        console.log("student got promise , defering learning action to future")
        promise
            .then(
                result => {
                    console.log("student got subject : " + result);
                },
                // error => {
                //     console.log("student got error : " + error);
                // }
            )
            .catch(error => {
                console.log("student got error : " + error);
            })
        console.log("student with other work.....")
    }
}

student.learn();




