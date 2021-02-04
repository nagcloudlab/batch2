





document.querySelector('.btn')
    .addEventListener('click', async e => {

        const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=5";

        //----------------------------------------------------------------
        // const promise = fetch(apiUrl)
        // promise
        //     .then(response => {
        //         return response.json()
        //     })
        //     .then(todos => {
        //         console.log(todos);
        //     })
        // console.log("please wait, loading todos")

        //----------------------------------------------------------------

        // Async code like sync code with promise api  without callbacks
        // use 'async & await keywords' (ES7)

        const response = await fetch(apiUrl);
        const todos = await response.json();
        console.log(todos);

        //----------------------------------------------------------------

    })