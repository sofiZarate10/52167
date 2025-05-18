grammar analizador;

configuracion
    : 'configuración' nombre '{' secciones '}'
    ;

secciones
    : seccion*
    ;

seccion
    : 'sección' nombre '{' parametros '}'
    ;

parametros
    : parametro*
    ;

parametro
    : nombre '=' valor ';'
    ;

valor
    : numero
    | CADENA
    | booleano
    ;

numero
    : DIGITO+
    ;

cadena
    : '"' caracter* '"'
    ;

caracter
    : LETRA
    | DIGITO
    | SIMBOLO
    ;

booleano
    : 'verdadero'
    | 'falso'
    ;

nombre
    : NOMBRE
    ;

NOMBRE : [a-zA-Z][a-zA-Z0-9]* ;

DIGITO : [0-9] ;

LETRA : [a-zA-Z] ;

CADENA : '"' (~["\r\n])* '"' ;

SIMBOLO
    : ','
    | '!'
    | '?'
    | ';'
    | ':'
    | '\''
    ;

WS
    : [ \t\r\n]+ -> skip
    ;