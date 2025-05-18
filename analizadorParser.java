// Generated from analizador.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class analizadorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, LETRA=11, DIGITO=12, SIMBOLO=13, WS=14;
	public static final int
		RULE_configuracion = 0, RULE_secciones = 1, RULE_seccion = 2, RULE_parametros = 3, 
		RULE_parametro = 4, RULE_valor = 5, RULE_numero = 6, RULE_cadena = 7, 
		RULE_booleano = 8, RULE_nombre = 9, RULE_caracter = 10;
	private static String[] makeRuleNames() {
		return new String[] {
			"configuracion", "secciones", "seccion", "parametros", "parametro", "valor", 
			"numero", "cadena", "booleano", "nombre", "caracter"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'configuraci\\u00F3n'", "'{'", "'}'", "'secci\\u00F3n'", "'='", 
			"';'", "'\"'", "'verdadero'", "'falso'", "' '"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, "LETRA", 
			"DIGITO", "SIMBOLO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "analizador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public analizadorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConfiguracionContext extends ParserRuleContext {
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public SeccionesContext secciones() {
			return getRuleContext(SeccionesContext.class,0);
		}
		public ConfiguracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_configuracion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterConfiguracion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitConfiguracion(this);
		}
	}

	public final ConfiguracionContext configuracion() throws RecognitionException {
		ConfiguracionContext _localctx = new ConfiguracionContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_configuracion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(22);
			match(T__0);
			setState(23);
			nombre();
			setState(24);
			match(T__1);
			setState(25);
			secciones();
			setState(26);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SeccionesContext extends ParserRuleContext {
		public List<SeccionContext> seccion() {
			return getRuleContexts(SeccionContext.class);
		}
		public SeccionContext seccion(int i) {
			return getRuleContext(SeccionContext.class,i);
		}
		public SeccionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_secciones; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterSecciones(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitSecciones(this);
		}
	}

	public final SeccionesContext secciones() throws RecognitionException {
		SeccionesContext _localctx = new SeccionesContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_secciones);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(31);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__3) {
				{
				{
				setState(28);
				seccion();
				}
				}
				setState(33);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SeccionContext extends ParserRuleContext {
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public ParametrosContext parametros() {
			return getRuleContext(ParametrosContext.class,0);
		}
		public SeccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_seccion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterSeccion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitSeccion(this);
		}
	}

	public final SeccionContext seccion() throws RecognitionException {
		SeccionContext _localctx = new SeccionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_seccion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			match(T__3);
			setState(35);
			nombre();
			setState(36);
			match(T__1);
			setState(37);
			parametros();
			setState(38);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametrosContext extends ParserRuleContext {
		public List<ParametroContext> parametro() {
			return getRuleContexts(ParametroContext.class);
		}
		public ParametroContext parametro(int i) {
			return getRuleContext(ParametroContext.class,i);
		}
		public ParametrosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametros; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterParametros(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitParametros(this);
		}
	}

	public final ParametrosContext parametros() throws RecognitionException {
		ParametrosContext _localctx = new ParametrosContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_parametros);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LETRA) {
				{
				{
				setState(40);
				parametro();
				}
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametroContext extends ParserRuleContext {
		public NombreContext nombre() {
			return getRuleContext(NombreContext.class,0);
		}
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public ParametroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parametro; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterParametro(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitParametro(this);
		}
	}

	public final ParametroContext parametro() throws RecognitionException {
		ParametroContext _localctx = new ParametroContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_parametro);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			nombre();
			setState(47);
			match(T__4);
			setState(48);
			valor();
			setState(49);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorContext extends ParserRuleContext {
		public NumeroContext numero() {
			return getRuleContext(NumeroContext.class,0);
		}
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public BooleanoContext booleano() {
			return getRuleContext(BooleanoContext.class,0);
		}
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterValor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitValor(this);
		}
	}

	public final ValorContext valor() throws RecognitionException {
		ValorContext _localctx = new ValorContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_valor);
		try {
			setState(54);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DIGITO:
				enterOuterAlt(_localctx, 1);
				{
				setState(51);
				numero();
				}
				break;
			case T__6:
				enterOuterAlt(_localctx, 2);
				{
				setState(52);
				cadena();
				}
				break;
			case T__7:
			case T__8:
				enterOuterAlt(_localctx, 3);
				{
				setState(53);
				booleano();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ParserRuleContext {
		public List<TerminalNode> DIGITO() { return getTokens(analizadorParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(analizadorParser.DIGITO, i);
		}
		public NumeroContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_numero; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterNumero(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitNumero(this);
		}
	}

	public final NumeroContext numero() throws RecognitionException {
		NumeroContext _localctx = new NumeroContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_numero);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(57); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(56);
				match(DIGITO);
				}
				}
				setState(59); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==DIGITO );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CadenaContext extends ParserRuleContext {
		public List<CaracterContext> caracter() {
			return getRuleContexts(CaracterContext.class);
		}
		public CaracterContext caracter(int i) {
			return getRuleContext(CaracterContext.class,i);
		}
		public CadenaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cadena; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterCadena(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitCadena(this);
		}
	}

	public final CadenaContext cadena() throws RecognitionException {
		CadenaContext _localctx = new CadenaContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_cadena);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			match(T__6);
			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 15360L) != 0)) {
				{
				{
				setState(62);
				caracter();
				}
				}
				setState(67);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(68);
			match(T__6);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BooleanoContext extends ParserRuleContext {
		public BooleanoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_booleano; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterBooleano(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitBooleano(this);
		}
	}

	public final BooleanoContext booleano() throws RecognitionException {
		BooleanoContext _localctx = new BooleanoContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_booleano);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			_la = _input.LA(1);
			if ( !(_la==T__7 || _la==T__8) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NombreContext extends ParserRuleContext {
		public List<TerminalNode> LETRA() { return getTokens(analizadorParser.LETRA); }
		public TerminalNode LETRA(int i) {
			return getToken(analizadorParser.LETRA, i);
		}
		public List<TerminalNode> DIGITO() { return getTokens(analizadorParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(analizadorParser.DIGITO, i);
		}
		public NombreContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nombre; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterNombre(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitNombre(this);
		}
	}

	public final NombreContext nombre() throws RecognitionException {
		NombreContext _localctx = new NombreContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_nombre);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			match(LETRA);
			setState(76);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LETRA || _la==DIGITO) {
				{
				{
				setState(73);
				_la = _input.LA(1);
				if ( !(_la==LETRA || _la==DIGITO) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(78);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CaracterContext extends ParserRuleContext {
		public TerminalNode LETRA() { return getToken(analizadorParser.LETRA, 0); }
		public TerminalNode DIGITO() { return getToken(analizadorParser.DIGITO, 0); }
		public TerminalNode SIMBOLO() { return getToken(analizadorParser.SIMBOLO, 0); }
		public CaracterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caracter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterCaracter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitCaracter(this);
		}
	}

	public final CaracterContext caracter() throws RecognitionException {
		CaracterContext _localctx = new CaracterContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_caracter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 15360L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u000eR\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0005\u0001\u001e"+
		"\b\u0001\n\u0001\f\u0001!\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0005\u0003*\b\u0003"+
		"\n\u0003\f\u0003-\t\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u00057\b\u0005"+
		"\u0001\u0006\u0004\u0006:\b\u0006\u000b\u0006\f\u0006;\u0001\u0007\u0001"+
		"\u0007\u0005\u0007@\b\u0007\n\u0007\f\u0007C\t\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0005\tK\b\t\n\t\f\tN\t\t\u0001"+
		"\n\u0001\n\u0001\n\u0000\u0000\u000b\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0000\u0003\u0001\u0000\b\t\u0001\u0000\u000b\f\u0001"+
		"\u0000\n\rM\u0000\u0016\u0001\u0000\u0000\u0000\u0002\u001f\u0001\u0000"+
		"\u0000\u0000\u0004\"\u0001\u0000\u0000\u0000\u0006+\u0001\u0000\u0000"+
		"\u0000\b.\u0001\u0000\u0000\u0000\n6\u0001\u0000\u0000\u0000\f9\u0001"+
		"\u0000\u0000\u0000\u000e=\u0001\u0000\u0000\u0000\u0010F\u0001\u0000\u0000"+
		"\u0000\u0012H\u0001\u0000\u0000\u0000\u0014O\u0001\u0000\u0000\u0000\u0016"+
		"\u0017\u0005\u0001\u0000\u0000\u0017\u0018\u0003\u0012\t\u0000\u0018\u0019"+
		"\u0005\u0002\u0000\u0000\u0019\u001a\u0003\u0002\u0001\u0000\u001a\u001b"+
		"\u0005\u0003\u0000\u0000\u001b\u0001\u0001\u0000\u0000\u0000\u001c\u001e"+
		"\u0003\u0004\u0002\u0000\u001d\u001c\u0001\u0000\u0000\u0000\u001e!\u0001"+
		"\u0000\u0000\u0000\u001f\u001d\u0001\u0000\u0000\u0000\u001f \u0001\u0000"+
		"\u0000\u0000 \u0003\u0001\u0000\u0000\u0000!\u001f\u0001\u0000\u0000\u0000"+
		"\"#\u0005\u0004\u0000\u0000#$\u0003\u0012\t\u0000$%\u0005\u0002\u0000"+
		"\u0000%&\u0003\u0006\u0003\u0000&\'\u0005\u0003\u0000\u0000\'\u0005\u0001"+
		"\u0000\u0000\u0000(*\u0003\b\u0004\u0000)(\u0001\u0000\u0000\u0000*-\u0001"+
		"\u0000\u0000\u0000+)\u0001\u0000\u0000\u0000+,\u0001\u0000\u0000\u0000"+
		",\u0007\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000./\u0003\u0012"+
		"\t\u0000/0\u0005\u0005\u0000\u000001\u0003\n\u0005\u000012\u0005\u0006"+
		"\u0000\u00002\t\u0001\u0000\u0000\u000037\u0003\f\u0006\u000047\u0003"+
		"\u000e\u0007\u000057\u0003\u0010\b\u000063\u0001\u0000\u0000\u000064\u0001"+
		"\u0000\u0000\u000065\u0001\u0000\u0000\u00007\u000b\u0001\u0000\u0000"+
		"\u00008:\u0005\f\u0000\u000098\u0001\u0000\u0000\u0000:;\u0001\u0000\u0000"+
		"\u0000;9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<\r\u0001\u0000"+
		"\u0000\u0000=A\u0005\u0007\u0000\u0000>@\u0003\u0014\n\u0000?>\u0001\u0000"+
		"\u0000\u0000@C\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000\u0000AB\u0001"+
		"\u0000\u0000\u0000BD\u0001\u0000\u0000\u0000CA\u0001\u0000\u0000\u0000"+
		"DE\u0005\u0007\u0000\u0000E\u000f\u0001\u0000\u0000\u0000FG\u0007\u0000"+
		"\u0000\u0000G\u0011\u0001\u0000\u0000\u0000HL\u0005\u000b\u0000\u0000"+
		"IK\u0007\u0001\u0000\u0000JI\u0001\u0000\u0000\u0000KN\u0001\u0000\u0000"+
		"\u0000LJ\u0001\u0000\u0000\u0000LM\u0001\u0000\u0000\u0000M\u0013\u0001"+
		"\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000OP\u0007\u0002\u0000\u0000"+
		"P\u0015\u0001\u0000\u0000\u0000\u0006\u001f+6;AL";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}