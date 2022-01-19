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
        card: string
        exercicio: string;
        duracao: String;
    }]
}