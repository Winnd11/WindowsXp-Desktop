const op1 = document.getElementById('radio29')
const op2 = document.getElementById('radio30')

const op3 = document.getElementById('radio20')
const op4 = document.getElementById('radio21')

const op5 = document.getElementById('radio10')
const op6 = document.getElementById('radio09')

function verify() {
    let text = document.getElementById('text').value
    if (text === '') {
        document.getElementById('result').innerText = 'put a value <--'
    }
}

function verify2() {
  let text = document.getElementById('text2').value
    if (text === '') {
        document.getElementById('result2').innerText = 'put a value <--'
    }
}

function verify3() {
  let text = document.getElementById('text3').value
  if (text === '') {
    document.getElementById('result3').innerText = 'put a value <--'
  }
}

// fechar programa
function closeprogram() {
  let converter = document.getElementById('converter')
  let minimize = document.getElementById('blue-program')
  let pro = document.getElementById('program-mini')
  converter.style.display = 'none'
  minimize.style.display = 'none'
  pro.style.display = 'none'
}

// abrir programa
function converterprogram() {
  let open = document.getElementById('converter')
  let minimize = document.getElementById('blue-program')
  let pro = document.getElementById('program-mini')
  open.style.display = 'block'
  minimize.style.display = 'inline-block'
  minimize.style.backgroundColor = 'rgb(76, 135, 233)'
  pro.style.display = 'inline-block'
}

// minimizar programa
function minimizeprogram() {
  let mini = document.getElementById('converter')
  let minimize = document.getElementById('blue-program')
  mini.style.display = 'none'
  minimize.style.backgroundColor = 'rgb(64, 116, 199)'

}

// abrir programa minimizado
function blue() {
  let open = document.getElementById('converter')
  let minimize = document.getElementById('blue-program')
  open.style.display = 'block'
  minimize.style.backgroundColor = 'rgb(76, 135, 233)'
}

// fechar bloco de notas
function closenotepad() {
  let wordpad = document.getElementById('notepad')
  let minimize = document.getElementById('note-program')
  let pro = document.getElementById('note-mini')
  wordpad.style.display = 'none'
  minimize.style.display = 'none'
  pro.style.display = 'none'
}

// abrir bloco de notas
function notepad() {
  let open = document.getElementById('notepad')
  let minimize = document.getElementById('note-program')
  let pro = document.getElementById('note-mini')
  open.style.display = 'block'
  minimize.style.display = 'inline-block'
  minimize.style.backgroundColor = 'rgb(76, 135, 233)'
  pro.style.display = 'inline-block'
}

// minimizar bloco de notas
function minimizenote() {
  let mini = document.getElementById('notepad')
  let minimize = document.getElementById('note-program')
  mini.style.display = 'none'
  minimize.style.backgroundColor = 'rgb(64, 116, 199)'
}

// abrir bloco de notas minimizado
function note() {
  let open = document.getElementById('notepad')
  let minimize = document.getElementById('note-program')
  open.style.display = 'block'
  minimize.style.backgroundColor = 'rgb(76, 135, 233)'
}

// fechar documentos 
function closedocuments() {
  let documents = document.getElementById('documents')
  let minimize = document.getElementById('docu-program')
  let pro = document.getElementById('docu-mini')
  documents.style.display = 'none'
  minimize.style.display = 'none'
  pro.style.display = 'none'
}

// abrir documentos
function mydocument() {
  let documents = document.getElementById('documents')
  let minimize = document.getElementById('docu-program')
  let pro = document.getElementById('docu-mini')
  documents.style.display = 'block'
  minimize.style.display = 'inline-block'
  pro.style.display = 'inline-block'
}

// minimizar documentos 
function minimizedocu() {
  let mini = document.getElementById('documents')
  let minimize = document.getElementById('docu-program')
  mini.style.display = 'none'
  minimize.style.backgroundColor = 'rgb(64, 116, 199)'
}

// abrir documentos minimizado
function docu() {
  let open = document.getElementById('documents')
  let minimize = document.getElementById('docu-program')
  open.style.display = 'block'
  minimize.style.backgroundColor = 'rgb(76, 135, 233)'
}

function btnerro() { 
    let erromm = document.getElementById('error')
    let top = Math.floor(Math.random() *65)+1;
    let left = Math.floor(Math.random() *90)+1;
    erromm.style.display = 'block'
    erromm.style.top = top + 'em'
    erromm.style.left = left + 'em'
    var original = document.getElementById('error')
    var copia = original.cloneNode(true)
    document.body.append(copia)
}

function btn() {
    if (op1.checked) {
        let texto = document.getElementById('text')
        let textf = Number(texto.value)
        let resultado = textf + 273.15
        document.getElementById('result').innerText = eval(resultado.toFixed(2)) + ' °K'
    }

    if (op2.checked) {
        let texto = document.getElementById('text')
        let textf = Number(texto.value)
        let resultado = textf * 9/5 + 32
        document.getElementById('result').innerText = eval(resultado.toFixed(2)) + ' °F'
    }

    verify()
};

function btn2() {
  if(op3.checked) {
    let texto = document.getElementById('text2')
    let textf = Number(texto.value)
    let resultado = textf - 273.15
    document.getElementById('result2').innerText = eval(resultado.toFixed(2)) + ' °C'
  }

  if (op4.checked) {
    let texto = document.getElementById('text2')
    let textf = Number(texto.value)
    let resultado = textf * 9/5 - 459
    document.getElementById('result2').innerText = eval(resultado.toFixed(2)) + ' °F'
  }

  verify2()
}

function btn3() {
  if(op5.checked) {
    let texto = document.getElementById('text3')
    let textf = Number(texto.value)
    let resultado = (textf - 30) / 2
    document.getElementById('result3').innerText = eval(resultado.toFixed(2)) + ' °C'
  }

  if(op6.checked) {
    let texto = document.getElementById('text3')
    let textf = Number(texto.value)
    let resultado = (textf - 32) * 5/9 + 273.15
    document.getElementById('result3').innerText = eval(resultado.toFixed(2)) + ' °K'
  }
}

// function wallpaper1() {
//   let background = document.getElementById('background')
//   let background2 = document.getElementById('background-eva')
//   background.style.display = 'none'
//   background2.style.display = 'block'
// }

// function wallpaper2() {
//   let background = document.getElementById('background')
//   let background2 = document.getElementById('background-subaru')
//   background.style.display = 'none'
//   background2.style.display = 'block'
// }

const date = new Date().toLocaleTimeString();
document.getElementById('time').innerText = date

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("menu[role=tablist]");
    
    for (let i = 0; i < tabs.length; i++) {
      const tab = tabs[i];
    
      const tabButtons = tab.querySelectorAll("menu[role=tablist] > button");

      tabButtons.forEach((btn) =>
        btn.addEventListener("click", (e) => {
          e.preventDefault();
    
          tabButtons.forEach((button) => {
            if (
              button.getAttribute("aria-controls") ===
              e.target.getAttribute("aria-controls")
            ) {
              button.setAttribute("aria-selected", true);
              openTab(e, tab);
            } else {
              button.setAttribute("aria-selected", false);
            }
          });
        })
      );
    }
      
    });
    
    
    function openTab(event, tab) {
      const articles = tab.parentNode.querySelectorAll('[role="tabpanel"]');
      articles.forEach((p) => {
        p.setAttribute("hidden", true);
      });
      const article = tab.parentNode.querySelector(
        `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
      );
      article.removeAttribute("hidden");
      }
