// Generated from c:/Users/laura/OneDrive/Escritorio/analizador/52167/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,15,77,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,1,0,1,
0,1,1,5,1,30,8,1,10,1,12,1,33,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,5,3,42,8,3,
10,3,12,3,45,9,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,3,5,55,8,5,1,6,4,6,58,8,
6,11,6,12,6,59,1,7,1,7,5,7,64,8,7,10,7,12,7,67,9,7,1,7,1,7,1,8,1,8,1,9,1,
9,1,10,1,10,1,10,0,0,11,0,2,4,6,8,10,12,14,16,18,20,0,2,2,0,11,12,14,14,
1,0,8,9,71,0,22,1,0,0,0,2,31,1,0,0,0,4,34,1,0,0,0,6,43,1,0,0,0,8,46,1,0,
0,0,10,54,1,0,0,0,12,57,1,0,0,0,14,61,1,0,0,0,16,70,1,0,0,0,18,72,1,0,0,
0,20,74,1,0,0,0,22,23,5,1,0,0,23,24,3,20,10,0,24,25,5,2,0,0,25,26,3,2,1,
0,26,27,5,3,0,0,27,1,1,0,0,0,28,30,3,4,2,0,29,28,1,0,0,0,30,33,1,0,0,0,31,
29,1,0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,31,1,0,0,0,34,35,5,4,0,0,35,36,
3,20,10,0,36,37,5,2,0,0,37,38,3,6,3,0,38,39,5,3,0,0,39,5,1,0,0,0,40,42,3,
8,4,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,7,1,0,0,
0,45,43,1,0,0,0,46,47,3,20,10,0,47,48,5,5,0,0,48,49,3,10,5,0,49,50,5,6,0,
0,50,9,1,0,0,0,51,55,3,12,6,0,52,55,5,13,0,0,53,55,3,18,9,0,54,51,1,0,0,
0,54,52,1,0,0,0,54,53,1,0,0,0,55,11,1,0,0,0,56,58,5,11,0,0,57,56,1,0,0,0,
58,59,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,13,1,0,0,0,61,65,5,7,0,0,62,
64,3,16,8,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,68,
1,0,0,0,67,65,1,0,0,0,68,69,5,7,0,0,69,15,1,0,0,0,70,71,7,0,0,0,71,17,1,
0,0,0,72,73,7,1,0,0,73,19,1,0,0,0,74,75,5,10,0,0,75,21,1,0,0,0,5,31,43,54,
59,65];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, "'configuraci\\u00F3n'", "'{'", "'}'", 
                            "'secci\\u00F3n'", "'='", "';'", "'\"'", "'verdadero'", 
                            "'falso'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "NOMBRE", "DIGITO", "LETRA", "CADENA", 
                             "SIMBOLO", "WS" ];
    static ruleNames = [ "configuracion", "secciones", "seccion", "parametros", 
                         "parametro", "valor", "numero", "cadena", "caracter", 
                         "booleano", "nombre" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }



	configuracion() {
	    let localctx = new ConfiguracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_configuracion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.match(analizadorParser.T__0);
	        this.state = 23;
	        this.nombre();
	        this.state = 24;
	        this.match(analizadorParser.T__1);
	        this.state = 25;
	        this.secciones();
	        this.state = 26;
	        this.match(analizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	secciones() {
	    let localctx = new SeccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_secciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 28;
	            this.seccion();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seccion() {
	    let localctx = new SeccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_seccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.match(analizadorParser.T__3);
	        this.state = 35;
	        this.nombre();
	        this.state = 36;
	        this.match(analizadorParser.T__1);
	        this.state = 37;
	        this.parametros();
	        this.state = 38;
	        this.match(analizadorParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametros() {
	    let localctx = new ParametrosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_parametros);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 40;
	            this.parametro();
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parametro() {
	    let localctx = new ParametroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_parametro);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.nombre();
	        this.state = 47;
	        this.match(analizadorParser.T__4);
	        this.state = 48;
	        this.valor();
	        this.state = 49;
	        this.match(analizadorParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_valor);
	    try {
	        this.state = 54;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51;
	            this.numero();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 52;
	            this.match(analizadorParser.CADENA);
	            break;
	        case 8:
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 53;
	            this.booleano();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 56;
	            this.match(analizadorParser.DIGITO);
	            this.state = 59; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, analizadorParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(analizadorParser.T__6);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 22528) !== 0)) {
	            this.state = 62;
	            this.caracter();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 68;
	        this.match(analizadorParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, analizadorParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 22528) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleano() {
	    let localctx = new BooleanoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, analizadorParser.RULE_booleano);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===9)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombre() {
	    let localctx = new NombreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, analizadorParser.RULE_nombre);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(analizadorParser.NOMBRE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.T__0 = 1;
analizadorParser.T__1 = 2;
analizadorParser.T__2 = 3;
analizadorParser.T__3 = 4;
analizadorParser.T__4 = 5;
analizadorParser.T__5 = 6;
analizadorParser.T__6 = 7;
analizadorParser.T__7 = 8;
analizadorParser.T__8 = 9;
analizadorParser.NOMBRE = 10;
analizadorParser.DIGITO = 11;
analizadorParser.LETRA = 12;
analizadorParser.CADENA = 13;
analizadorParser.SIMBOLO = 14;
analizadorParser.WS = 15;

analizadorParser.RULE_configuracion = 0;
analizadorParser.RULE_secciones = 1;
analizadorParser.RULE_seccion = 2;
analizadorParser.RULE_parametros = 3;
analizadorParser.RULE_parametro = 4;
analizadorParser.RULE_valor = 5;
analizadorParser.RULE_numero = 6;
analizadorParser.RULE_cadena = 7;
analizadorParser.RULE_caracter = 8;
analizadorParser.RULE_booleano = 9;
analizadorParser.RULE_nombre = 10;

class ConfiguracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_configuracion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	secciones() {
	    return this.getTypedRuleContext(SeccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterConfiguracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitConfiguracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitConfiguracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_secciones;
    }

	seccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SeccionContext);
	    } else {
	        return this.getTypedRuleContext(SeccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterSecciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitSecciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitSecciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_seccion;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	parametros() {
	    return this.getTypedRuleContext(ParametrosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterSeccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitSeccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitSeccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametrosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_parametros;
    }

	parametro = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParametroContext);
	    } else {
	        return this.getTypedRuleContext(ParametroContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterParametros(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitParametros(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitParametros(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_parametro;
    }

	nombre() {
	    return this.getTypedRuleContext(NombreContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterParametro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitParametro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitParametro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_valor;
    }

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	CADENA() {
	    return this.getToken(analizadorParser.CADENA, 0);
	};

	booleano() {
	    return this.getTypedRuleContext(BooleanoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.DIGITO);
	    } else {
	        return this.getToken(analizadorParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_cadena;
    }

	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(analizadorParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(analizadorParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(analizadorParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BooleanoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_booleano;
    }


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterBooleano(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitBooleano(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitBooleano(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_nombre;
    }

	NOMBRE() {
	    return this.getToken(analizadorParser.NOMBRE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterNombre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitNombre(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitNombre(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.ConfiguracionContext = ConfiguracionContext; 
analizadorParser.SeccionesContext = SeccionesContext; 
analizadorParser.SeccionContext = SeccionContext; 
analizadorParser.ParametrosContext = ParametrosContext; 
analizadorParser.ParametroContext = ParametroContext; 
analizadorParser.ValorContext = ValorContext; 
analizadorParser.NumeroContext = NumeroContext; 
analizadorParser.CadenaContext = CadenaContext; 
analizadorParser.CaracterContext = CaracterContext; 
analizadorParser.BooleanoContext = BooleanoContext; 
analizadorParser.NombreContext = NombreContext; 
