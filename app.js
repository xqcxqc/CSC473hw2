// var btns = document.querySelectorAll('.normal');
var btns = document.querySelectorAll('.btn');
var screen = document.querySelector("#screen");
var answer = document.querySelector("#answer");


for (var button of btns) {
    button.addEventListener('click', (e) => {
        var text = e.target.innerText;
        if (text === "=") {
            try {
                lnConverter()
                var result = math.evaluate(screen.value);
                math.format(result, { precision: 10 })  //round off
                answer.value = result;
                screen.value = ''
            } catch (error) {
                answer.value = "ERROR";
                screen.value = ''
            }
        }
        else if (text === "AC") {
            screen.value = ''
        }
        else {
            text = assignValue(text);
            screen.value += text;
        }
    })
}


function assignValue(text) {
    switch (text) {
        case 'x':
            return '*'
            break;
        case '−':
            return '-'
            break;
        case '÷':
            return '/'
            break;
        case 'x y':
            return '^'
            break;
        case 'sin':
            return 'sin(deg '
            break;
        case 'tan':
            return 'tan(deg '
            break;
        case 'cos':
            return 'cos(deg '
            break;
        case 'log':
            return 'log('
            break;
        case 'ln':
            return 'ln('
            break;
        case '√':
            return 'sqrt('
            break;
        case 'x!':
            return '!'
            break;
        case 'EXP':
            return '*10^'
            break;
        default:
            return text;

    }
}

//change ln(number) to log(number,e)
function lnConverter() {
    const ln = 'ln(';
    const closure = ')';

    const words = screen.value
    var start = words.indexOf(ln)
    var end = words.indexOf(closure, start)
    var number = words.substring(start + 3, end);

    //build new string:
    if (start != -1) {
        const newWords = words.substring(0, start) + "log(" + number + ",e)" + words.substring(end + 1, words.length)
        console.log(newWords)
        screen.value = newWords
    }

}
