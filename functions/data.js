
//produto "plano A" vai ter N tipos de pagamento, mensal, trimestral e semestral
//cada um deles aumentara um no valor do plano 1, 2, 3, 4, ..
//o segundo produto "plano B" tera o valor de plano a partir de 10 (11, 12, ...)

module.exports = {  
    // PLANO A:
    // mensal
    "price_1LFKx8CmcyIwF9rcptrUJuBI": {
        plan: 1,
        iterations: 0
    },
    // trimestral parcelado (mensal)
    "price_1LFKpkCmcyIwF9rcHm7cVgUd":{
        plan: 2,
        iterations: 3
    },
    // semestral parcelado (mensal)
    // "price_1LEk9LCmcyIwF9rcTgWOXDqu":{
    //     plan: 3,
    //     iterations: 6
    // },
    // anual parcelado (mensal)
    "price_1LFL3XCmcyIwF9rcJy8jLFqf":{
        plan: 4,
        iterations: 12
    },

    // PLANO B
    // mensal
    "price_1LFkOACmcyIwF9rcGGV8TELx":{
        plan: 10,
        iterations: 0
    },
    // trimestral parcelado (mensal)
    "price_1LFkNYCmcyIwF9rcajeITdWW":{
        plan: 11,
        iterations: 3
    },
    // semestral parcelado (mensal)
    // "price_1LEk9LCmcyIwF9rcTgWOXDqu":{
    //     plan: 12,
    //     iterations: 6
    // },
    // anual parcelado (mensal)
    "price_1LFkLCCmcyIwF9rc2JUasWWY":{
        plan: 13,
        iterations: 12
    },

    // PLANO C
    // mensal
    "price_1LFLB2CmcyIwF9rcoZDBuj4v":{
        plan: 20,
        iterations: 0
    },
    // trimestral parcelado (mensal)
    "price_1LFLCXCmcyIwF9rcusWSqn6I":{
        plan: 21,
        iterations: 3
    },
    // semestral parcelado (mensal)
    // "price_1LEk9LCmcyIwF9rcTgWOXDqu":{
    //     plan: 22,
    //     iterations: 6
    // },
    // anual parcelado (mensal)
    "price_1LFLDaCmcyIwF9rcfb91PhiF":{
        plan: 23,
        iterations: 12
    },

    //COURSES e validade (sempre em meses)
    "price_1LCSlMCmcyIwF9rclFqC0o2O":{
        months: 6
    },
    "price_1LB4HuCmcyIwF9rcPpxAcgvz":{
        months: 12
    },

};



