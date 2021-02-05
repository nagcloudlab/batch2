

// function add(x: number, y: number): number {
//     return x + y;
// }

// let myAdd = function (x: number, y: number): number {
//     return x + y;
// };


//----------------------------------------------------------------




// let myAdd: (x: number, y: number) => number;

// myAdd = function (x: number, y: number): number {
//     return x + y;
// }

//----------------------------------------------------------------

// function buildName(firstName: string, lastName?: string) {
//     if (lastName) return firstName + " " + lastName;
//     else return firstName;
// }


// buildName("Nag")

//----------------------------------------------------------------

// let suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x: { suit: string; card: number }[]): number;
// function pickCard(x: number): { suit: string; card: number };
// function pickCard(x: any): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }

// }

// let myDeck = [
//     { suit: "diamonds", card: 2 },
//     { suit: "spades", card: 10 },
//     { suit: "hearts", card: 4 },
// ];

// let pickedCard1 = myDeck[pickCard(myDeck)];
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

// let pickedCard2 = pickCard(15);
// alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

//----------------------------------------------------------------


function hof(f: () => void): () => void {
    return () => {
        console.log("🌺🌺🌺🌺🌺");
        f();
    }
}

const greet = () => console.log("Hello Typescript");

const newF: () => void = hof(greet);

newF()

//----------------------------------------------------------------
