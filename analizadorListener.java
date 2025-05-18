// Generated from analizador.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link analizadorParser}.
 */
public interface analizadorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link analizadorParser#configuracion}.
	 * @param ctx the parse tree
	 */
	void enterConfiguracion(analizadorParser.ConfiguracionContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#configuracion}.
	 * @param ctx the parse tree
	 */
	void exitConfiguracion(analizadorParser.ConfiguracionContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#secciones}.
	 * @param ctx the parse tree
	 */
	void enterSecciones(analizadorParser.SeccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#secciones}.
	 * @param ctx the parse tree
	 */
	void exitSecciones(analizadorParser.SeccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#seccion}.
	 * @param ctx the parse tree
	 */
	void enterSeccion(analizadorParser.SeccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#seccion}.
	 * @param ctx the parse tree
	 */
	void exitSeccion(analizadorParser.SeccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#parametros}.
	 * @param ctx the parse tree
	 */
	void enterParametros(analizadorParser.ParametrosContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#parametros}.
	 * @param ctx the parse tree
	 */
	void exitParametros(analizadorParser.ParametrosContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#parametro}.
	 * @param ctx the parse tree
	 */
	void enterParametro(analizadorParser.ParametroContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#parametro}.
	 * @param ctx the parse tree
	 */
	void exitParametro(analizadorParser.ParametroContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(analizadorParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(analizadorParser.ValorContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(analizadorParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(analizadorParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(analizadorParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(analizadorParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#booleano}.
	 * @param ctx the parse tree
	 */
	void enterBooleano(analizadorParser.BooleanoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#booleano}.
	 * @param ctx the parse tree
	 */
	void exitBooleano(analizadorParser.BooleanoContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#nombre}.
	 * @param ctx the parse tree
	 */
	void enterNombre(analizadorParser.NombreContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#nombre}.
	 * @param ctx the parse tree
	 */
	void exitNombre(analizadorParser.NombreContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(analizadorParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(analizadorParser.CaracterContext ctx);
}