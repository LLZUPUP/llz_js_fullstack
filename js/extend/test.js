var Vehicle = {
    engines: 1,
    ignition: function() {
        console.log('Vehicle的点火');
    },
    drive: function() {
        this.ignition();
        console.log('Vehicle的点火后发动')
    }
};

var Car = 
extend(Vehicle,{
    wheels: 4,
    drive: function() {
        Vehicle.drive.call(this);
        console.log(this.wheels+'Car的发动');
    }
});
function extend(subClass,superClass) {
    for(var key in subClass) {
        if(!key in superClass) {
            superClass[key] = subClass[key];
        }
    }
    return superClass;
}




console.log(Car)
