import { Parser } from "antlr4";
import analizadorVisitor from "./generated/analizadorVisitor.js";
import analizadorParser from "./generated/analizadorParser.js";

export class CustomCalculatorVisitor extends analizadorVisitor {

    constructor() {
        super();
        this.memory = new Map();   // Memoria temporal para reducciones
    } 
    
    // --- Métodos de evaluación (puedes conservarlos si los usas) ---
    visitInt(ctx) {
        return parseInt(ctx.INT().getText());
    }

    visitPrintExpr(ctx) {
        const value = this.visit(ctx.expr());
        console.log(`\nResultado: ${value}`);
        return this.visitChildren(ctx);
    }

    visitMulDiv(ctx) {
        const left =  this.visit(ctx.expr(0));
        const right = this.visit(ctx.expr(1));
        if (ctx.op.type==CalculatorParser.MUL)
            return left * right;
        else
            return left / right;
    }

    visitAddSub(ctx) {
        const left =  this.visit(ctx.expr(0));  
        const right = this.visit(ctx.expr(1));  
        if (ctx.op.type==CalculatorParser.ADD){
            return left + right; 
        } else
            return left - right;
    }

    visitParens(ctx) {
        return this.visit(ctx.expr());
    }

    visitId(ctx) {
        const id = ctx.ID().getText();
        if (this.memory.has(id)) return this.memory.get(id);
        return 0;
    }

    visitAssign(ctx) {
        const id = ctx.ID().getText();
        const value = this.visit(ctx.expr());
        this.memory.set(id, value);
        return value;
    }

    // --- Traducción a JavaScript ---
    toJavaScript(ctx) {
        return this.visit(ctx);
    }

    visitConfiguracion(ctx) {
        // configuración nombre { secciones }
        const nombre = ctx.nombre().getText();
        const secciones = ctx.secciones().seccion().map(sec => this.visit(sec)).join('\n');
        return `// Traducción de la configuración "${nombre}"\n${secciones}`;
    }

    visitSecciones(ctx) {
        // seccion*
        return ctx.seccion().map(seccionCtx => this.visit(seccionCtx)).join('\n');
    }

    visitSeccion(ctx) {
        // sección nombre { parametros }
        const nombre = ctx.nombre().getText();
        const parametros = ctx.parametros().parametro().map(par => this.visit(par)).join('\n');
        return `const ${nombre} = {\n${parametros}\n};`;
    }

    visitParametros(ctx) {
        // parametro*
        return ctx.parametro().map(parametroCtx => this.visit(parametroCtx)).join('\n');
    }

    visitParametro(ctx) {
        // nombre = valor ;
        const nombre = ctx.nombre().getText();
        const valor = this.visit(ctx.valor());
        return `  ${nombre}: ${valor},`;
    }

    visitValor(ctx) {
        if (ctx.numero()) return this.visit(ctx.numero());
        if (ctx.CADENA()) return ctx.CADENA().getText();
        if (ctx.booleano()) return this.visit(ctx.booleano());
        return "null";
    }

    visitNumero(ctx) {
        return ctx.getText();
    }

    visitCadena(ctx) {
        // Elimina las comillas dobles
        return ctx.getText();
    }

    visitBooleano(ctx) {
        // Devuelve true/false en JS
        const val = ctx.getText();
        if (val === "verdadero") return "true";
        if (val === "falso") return "false";
        return val;
    }
}