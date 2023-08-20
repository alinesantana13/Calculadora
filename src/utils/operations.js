function data() {
    event.preventDefault()
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    return { n1, n2 }
}
function sum() {
    const { n1, n2 } = data();
    const soma = (Number(n1) + Number(n2));
    document.querySelector('.exit').innerHTML = (`${soma}`)
}

const subtraction = () => {
    const { n1, n2 } = data();
    const soma = (Number(n1) - Number(n2));
    document.querySelector('.exit').innerHTML = (`${soma}`)
}

const multiplication = () => {
    const { n1, n2 } = data();
    const soma = (Number(n1) * Number(n2));
    document.querySelector('.exit').innerHTML = (`${soma}`)
}

const division = () => {
    const { n1, n2 } = data();
    const soma = (Number(n1) / Number(n2));
    document.querySelector('.exit').innerHTML = (`${soma}`)
}
