export class FullHistory{
    id: Number
    relWod:{
        wod:String;
        numCartas: String;
        dataInicio:String;
        dataFim:String;
        duracao:String;
    };
    relDetalhe:[{
        id:Number
        card: String
        exercicio: String;
        duracao: String;
    }]
}