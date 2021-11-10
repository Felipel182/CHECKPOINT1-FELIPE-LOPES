function microondas(prato,tempo) {
    if((prato >=1) && (prato <=5)){ 
        switch (prato){
            case 1:
                if ((tempo > 2*10) && (tempo < 3*10)){
                    console.log("A comida queimou!");
                } else if( tempo < 10){
                    console.log("Tempo insuficiente");
                }else if (tempo > 3*10){
                    console.log("Kabumm!")
                } else{
                    console.log("1 - Pipoca "+ 10 + " segundos");
                    console.log("Prato pronto, bom apetite!!!");
                }
            break;
            
            case 2:
                if ((tempo > 2*8) && (tempo < 3*8)){
                    console.log("A comida queimou!");
                } else if( tempo < 8){
                    console.log("Tempo insuficiente");
                }else if (tempo > 3*8){
                    console.log("Kabumm!")
                } else{
                    console.log("2 - Macarrão "+ 8 + " segundos");
                    console.log("Prato pronto, bom apetite!!!");
                }
            break; 

            case 3:
                if ((tempo > 2*15) && (tempo < 3*15)){
                    console.log("A comida queimou!");
                } else if( tempo < 15){
                    console.log("Tempo insuficiente");
                }else if (tempo > 3*15){
                    console.log("Kabumm!")
                } else{
                    console.log("3 - Carne "+ 15 + " segundos");
                    console.log("Prato pronto, bom apetite!!!");
                }
            break; 

            case 4:
                if ((tempo > 2*12) && (tempo < 3*12)){
                    console.log("A comida queimou!");
                } else if( tempo < 12){
                    console.log("Tempo insuficiente");
                }else if (tempo > 3*12){
                    console.log("Kabumm!")
                } else{
                    console.log("4 - Feijão "+ 12 + " segundos");
                    console.log("Prato pronto, bom apetite!!!");
                }
            break;

            case 5:
                if ((tempo > 2*8) && (tempo < 3*8)){
                    console.log("A comida queimou!");
                } else if( tempo < 8){
                    console.log("Tempo insuficiente");
                }else if (tempo > 3*8){
                    console.log("Kabumm!")
                } else{
                    console.log("5 - Brigadeiro "+ 8 + " segundos");
                    console.log("Prato pronto, bom apetite!!!");
                }
            break;
        
            

        }

        
    }else{
        console.log("Prato inexistente!");
    }   

    
}

microondas(2,11);
