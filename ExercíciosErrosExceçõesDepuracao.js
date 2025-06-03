//1. Definições Básicas (comentários explicativos)

// Erro: problema no código que impede execução correta.
// Exceção: erro em tempo de execução que pode ser tratado com try...catch.
// Diferença: "erro" é genérico; "exceção" é um tipo específico de erro em JS que pode ser capturado.

//2. Erros sem Exceções

const lista = [1, 2, 3];
console.log(lista[10]);

//3. Confiabilidade Limitada

function validarEntrada(entrada) {
  if (typeof entrada !== "number") {
    console.log("Valor inválido: número esperado.");
  } else {
    console.log("Valor válido:", entrada);
  }
}
validarEntrada("texto"); // Valor inválido
validarEntrada(42);      // Valor válido


//4. Tipos de Erros em JS

// ReferenceError: acessar variável inexistente
// console.log(x); => x não é definido

// TypeError: usar tipo errado
// null.f(); => Não é possível ler a propriedade 'f' de null

// SyntaxError: erro na escrita do código
// eval('if true { console.log("oi") }'); => Faltando parênteses

//5. Try…Catch Básico

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return null;
  }
}

console.log(safeParse('{"nome": "Leandromeda"}')); // { nome: "Leandromeda" }
console.log(safeParse('texto inválido'));          // null

//6. Tratamento Condicional de Exceções

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return null;
    } else {
      throw e;
    }
  }
}

//7. Bloco Finally

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return null;
    } else {
      throw e;
    }
  } finally {
    console.log("Parse attempt finished");
  }
}

console.log(safeParse('{"ok": true}'));  // { ok: true }
console.log(safeParse('erro'));          // null

//8. Lançando Erros Customizados

class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function checkAge(age) {
  if (age < 0 || age > 120) {
    throw new InvalidAgeError("Idade fora do intervalo");
  }
  return "Idade válida";
}

try {
  console.log(checkAge(-5));
} catch (e) {
  console.error(e.toString());
}
console.log(checkAge(30)); // Idade válida
try {
  console.log(checkAge(200));
} catch (e) {
  console.error(e.toString());
}

//9. Depuração com console.log => undefined + número resulta em NaN (Not a Number)

//10. Preparação do Ambiente de Depuração

// Comentário (sem código):
// 1. Pressione F12 ou clique com o botão direito → "Inspecionar".
// 2. Vá até a aba "Sources" (ou "Depurador").
// 3. Abra o arquivo JavaScript e clique na linha desejada para criar um breakpoint.

//11. Uso do debugger => Ao chegar no `debugger`, a execução pausa. Você pode inspecionar variáveis e usar ferramentas como "Step Over".

/*12 - **Step Over (Avançar sobre)**
  - Atalho comum: `F10`.
  - Executa a linha atual e para **na próxima**, sem entrar dentro de chamadas de função.
  - Útil quando você sabe que a função chamada está correta e só quer ver o próximo passo no código externo.
**Step Into (Entrar)**
  - Atalho comum: `F11`.
  - Ao chegar em uma chamada de função, “entra” nela e pausa na primeira linha interna.
  - Útil para investigar a lógica interna de funções.
**Step Out (Sair)**
  - Atalho comum: `Shift+F11`.
  - Executa o restante da função atual sem parar em suas linhas internas até retornar ao chamador.
  - Útil quando você entrou em funções pequenas e quer voltar rapidamente ao nível de execução que chamou.
*/

//13 - 
{
 function externo(n) {
  return interno(n) + 1;
}
function interno(m) {
  return m * 3;
}
interno(4);
}

//14 . Depuração Sem debugger

/*depois de atingir um breakpoint no painel de ferramentas do navegador:
para retomar normalmente, clique no botão "Resume script execution" (ícone de play/F8).
para remover todos os breakpoints, clique com o botão direito na área de breakpoints e escolha "Remove all breakpoints" ou use o botão de lixeira.
*/