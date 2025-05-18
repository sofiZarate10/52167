import analizadorLexer from "./generated/analizadorLexer.js";
import analizadorParser from "./generated/analizadorParser.js";
import { CustomCalculatorListener } from "./CustomCalculatorListener.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto
    let inputStream = CharStreams.fromString(input);
    let lexer = new analizadorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);

    // --- Generar tabla de tokens y lexemas ---
    tokenStream.fill();
    const symbolicNames = lexer.constructor.symbolicNames || [];
    const literalNames = lexer.constructor.literalNames || [];
    console.log("\nTabla de tokens y lexemas:");
    console.log("| Lexema           | Token           |");
    console.log("|------------------|-----------------|");
    for (let token of tokenStream.tokens) {
        if (token.type > 0) { // Ignora EOF y tokens inválidos
            const tokenName = symbolicNames[token.type] || literalNames[token.type] || token.type;
            console.log(`| ${token.text.padEnd(17)} | ${tokenName.padEnd(15)} |`);
        }
    }

    let parser = new analizadorParser(tokenStream);
    let tree = parser.configuracion();
    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomCalculatorListener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);

        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        const visitor = new CustomCalculatorVisitor();
        visitor.visit(tree);

        // Traducción a JavaScript (debes implementar toJavaScript en tu visitor)
        if (typeof visitor.toJavaScript === "function") {
            const jsCode = visitor.toJavaScript(tree);
            console.log("\nTraducción a JavaScript:");
            console.log(jsCode);
        } else {
            console.log("\nTraducción a JavaScript:");
            console.log("// Implementa el método toJavaScript en tu visitor para ver la traducción.");
        }
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();
