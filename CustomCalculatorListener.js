import analizadorListener from "./generated/analizadorListener.js";

export class CustomCalculatorListener extends analizadorListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}