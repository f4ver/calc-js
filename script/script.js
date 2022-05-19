const calc = document.querySelector('.container');
const result = document.querySelector('#result');
var m = 0;
var rvt = '';


calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('leftBtn')) return;

    const value = event.target.innerText;
    switch(value) {
        case 'MC':
            m = '';
            break;
        case 'MS':
            m = result.innerText;
        break;
        case 'MR':
            result.innerText = m;
        break;
        case 'M+':
            m = Number(m)+Number(result.innerText);
        break;
        case 'M-':
            m = Number(result.innerText)-Number(m);
        break;
        default:
            result.innerText +=value;
    }
});
calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('upperBtn')) return;

    const value = event.target.innerText;
    switch(value) {
        case 'Rvt':
            result.innerText = rvt;
            break;
        case 'C':
            result.innerText = '';
            break;
        case '<-':
            result.innerText = result.innerText.substring(0, result.innerText.length-1);
        break;
        case 'AC':
            m = '';
            result.innerText = '';
            break;
        break;
        default:
            result.innerText +=value;
    }
});
calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('number')) return;

    const value = event.target.innerText;
    switch(value) {
        case '+/-':
            result.innerText = -(eval(result.innerText));
            break;
        default:
            result.innerText +=value;
    }
});
calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('bigBtn')) return;

    const value = event.target.innerText;
    switch(value) {
        case '=':
            rvt = eval(result.innerText);
            result.innerText = eval(result.innerText);
            break;
        default:
            result.innerText +=value;
    }
});


