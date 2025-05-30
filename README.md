# Analizador Sintáctico

Este proyecto es un **analizador sintáctico** desarrollado en Node.js que reconoce una gramática específica escrita en **EBNF**, la cual fue traducida a ANTLR. El analizador valida entradas desde archivos de texto, identificando errores léxicos o sintácticos, y genera salidas informativas en la consola.
La gramática corresponde a una estructura de configuraciones

##  Qué hace el analizador

- Verifica si la entrada cumple con la gramática.
- Detecta errores **léxicos** y **sintácticos**.
- Genera una **tabla de tokens y lexemas**.
- Muestra el **árbol de derivación**.
- Traduce el contenido del input a **JavaScript**.
- Todo esto se imprime directamente en la **terminal**.

## Cómo ejecutar el proyecto

1- Abre la terminal 

    Ve al menú superior y haz clic en: Terminal > New Terminal (o presiona Ctrl + ñ).

2- En la terminal que se abre abajo, escribe lo siguiente y presiona Enter

    npm install antlr4
    
Este comando instalará lo necesario para que el analizador funcione.

3- Asegúrate de estar en la carpeta donde está el archivo input.txt

4- Copia y pega en el input alguno de los ejemplos.txt y apreta ctrl+S (esto es para que se guarden los cambios)

5- En la terminal, escribe el siguiente comando y presiona Enter:

    node index.js

6-mire los resultados en la terminal, si el ejemplo esta bien, mostrará:

     Que el enunciado es válido.
     Una tabla de tokens y lexemas.
     El árbol de derivación del texto analizado.
     La traducción del contenido a JavaScript.

7-Si el ejemplo está mal, en la terminal se mostrará:
    
    Una tabla de tokens y lexemas.
    Que se encontraron errores en la entrada.
    El error en cuestión.
 
 
