var assert = require('assert');
var Tamagochi = require('./tamagochi');
var TimeController = require('./time-controller');


describe('Given a TimeController', function(){
    describe('get pass time', function(){
        it('Time passed', function(){
            var timeController = new TimeController();
            setTimeout(() => {
                assert.ok(timeController.getPassTime());
            }, 500);
            
        });
    });
});

describe('Given a Tamagochi', function() {
  describe('feed', function() {
    it('should decrease hungriness', function() {
        var timeController = new TimeController();
        var tamagochi = new Tamagochi(timeController);
        var hungrinessActual = tamagochi.getHungriness();
        tamagochi.feed();
        var hungrinessExpected = tamagochi.getHungriness();
        assert.ok(hungrinessActual > hungrinessExpected);
    });

    it('should increase fullness', function() {
        var timeController = new TimeController();
        var tamagochi = new Tamagochi(timeController);
        var fullnessActual = tamagochi.getFullness();
        tamagochi.feed();
        var fullnessExpected = tamagochi.getFullness();
        assert.ok(fullnessActual < fullnessExpected);
    });

  });
  describe('play', function(){
    it('should increase happiness', function() {
        var timeController = new TimeController();
        var tamagochi = new Tamagochi(timeController);
        var happinessActual = tamagochi.getHappiness();
        tamagochi.play();
        var happinessExpected = tamagochi.getHappiness();
        assert.ok(happinessActual < happinessExpected);
    });

    it('should increase tiredness', function() {
        var timeController = new TimeController();
        var tamagochi = new Tamagochi(timeController);
        var tirednessActual = tamagochi.getTiredness();
        tamagochi.play();
        var tirednessExpected = tamagochi.getTiredness();
        assert.ok(tirednessActual < tirednessExpected);
    });
  });

  describe('time passes', function(){
    it('when time passes increase tiredness', function() {
        var timeController = new TimeController();
        var tamagochi = new Tamagochi(timeController);
        var tirednessActual = tamagochi.getTiredness();
        setTimeout(() => {
            tamagochi.update();
            var tirednessExpected = tamagochi.getTiredness();
            assert.ok(tirednessActual < tirednessExpected);
        }, 500);
    });
  });
});