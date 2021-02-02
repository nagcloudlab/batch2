
const tnr = {
    name: 'Nag'
}

const service = {
    doTeach: function () {
        console.log(this.name + " teaching ")
    }
}

const btn = document.getElementById('btn1')

// btn.addEventListener('click', function () {
//     service.doTeach.call(tnr);
// })

// or

btn.addEventListener('click', service.doTeach.bind(tnr))