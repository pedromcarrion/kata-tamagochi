class TimeController{
    constructor(){
        
        this.initialTime = new Date();
    }
    getPassTime(){
        
        let actualTime = new Date();
        //console.log('initial: ' + this.initialTime.getTime());
        //console.log('actual:' + actualTime.getTime());
        return this.initialTime.getTime() < actualTime.getTime();
        //return true;
    }
}

module.exports = TimeController;