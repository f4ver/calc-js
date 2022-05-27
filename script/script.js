const calc = document.querySelector('.container');
const result = document.querySelector('#result');
var m = 0;
var rvt = '';
var a = '';
var b = '';
var c = '';
result.innerText = '';
document.querySelector('#result').onkeypress = function(event){
}


let symbolBefore = n => {
    n = 1 + Math.log10(n*n) / 2;
    return Math.max(n - n % 1, 1);
}
const symbolAfter = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

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
            c = '';
            m = '';
            result.innerText = '';
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
            result.innerText = -result.innerText;
            break;
            case '*':
            c = result.innerText.replace(a,'').replace('+','');
            a = result.innerText;
            var b = c;
            result.innerText += value;
            if (result.innerText.includes('**')) {
                result.innerText=result.innerText.replace('**','*')
            }
            c = '';
            break;
            case '+':
            c = result.innerText.replace(a,'').replace('+','');
            a = result.innerText;
            var b = c;
            result.innerText += value;
            if (result.innerText.includes('++')) {
                result.innerText=result.innerText.replace('++','+')
            }
            c = '';
            break;
            case '-':
            c = result.innerText.replace(a,'').replace('+','');
            a = result.innerText;
            var b = c;
            result.innerText += value;
            if (result.innerText.includes('--')) {
                result.innerText=result.innerText.replace('--','-')
            }
            c = '';
            break;
            case '/':
            c = result.innerText.replace(a,'').replace('+','');
            a = result.innerText;
            var b = c;
            result.innerText += value;
            if (result.innerText.includes('//')) {
                result.innerText=result.innerText.replace('//','/')
            }
            c = '';
            break;
            case '.':
                if ( !c.includes('.')) {
                    c += '.'
                    result.innerText += '.';
                } 
                break;
                case '0':
                    c += '0';
                    result.innerText += '0';
                if ( c.startsWith('00')) {
                    c = '';
                    result.innerText = '';
                }
                break;
        default:
            result.innerText = result.innerText + value
            c = result.innerText.replace(a,'').replace('+','');
            if (symbolBefore(Number(c)) > 12){
                alert('Максимум 12 знаков')
                result.innerText =result.innerText.substring(0, result.innerText.length-1);
                c = '';
                return;
            }
            if (symbolAfter(c) > 8){
                alert('Максимум 8 знаков')
                result.innerText =result.innerText.substring(0, result.innerText.length-1);
                c = '';
                return;
            }
    }
});
calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('bigBtn')) return;

    const value = event.target.innerText;
    switch(value) {
        case '=':
            rvt = result.innerText;
            result.innerText = parseFloat(eval(result.innerText).toFixed(8));
            break;
            case '(':
                a = result.innerText;
                var b = c;
                if ( !c.includes('(')) {
                    c = result.innerText.replace(a,'').replace('+','')+ '(';
                    result.innerText += '(';
                }
                break;
            case ')':
                a = result.innerText;
                 var b = c;
                if ( !c.includes(')')) {
                    c = result.innerText.replace(a,'').replace('+','')+ ')';
                    result.innerText += ')';
                }
                break;
        default:
            result.innerText = result.innerText + value; 
            c = result.innerText.replace(a,'').replace('+','');
            if (symbolBefore(Number(c)) > 12){
                alert('Максимум 12 знаков')
                result.innerText =result.innerText.substring(0, result.innerText.length-1);
                c = '';
                return;
            }
            
    }
});