
class Tamagochi{
    constructor(timeController){
        this.timeController = timeController;
        this.hungriness = 50;
        this.fullness = 0;
        this.happiness = 50;
        this.tiredness = 0;
    }

    getHungriness(){
        return this.hungriness;
    }

    getFullness(){
        return this.fullness;
    }

    getHappiness(){
        return this.happiness;
    }

    getTiredness(){
        return this.tiredness;
    }

    feed(){
        this.hungriness--;
        this.fullness++;
    }

    play(){
        this.happiness++;
        this.tiredness++;
    }

    update(){
        if(this.timeController.getPassTime()){
            this.tiredness++;
        }
    }
}

module.exports = Tamagochi;