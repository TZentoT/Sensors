export class MyDet {
    id: number;
    name: string;
    status: boolean;
    show: boolean;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        this.show = true;
        if (getRandomInt(0,2) == 1) this.status = true;
        else this.status = false;
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }