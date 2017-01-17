Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}
var d = new Date();
//console.log(d);
console.log(d.addHours(24));
//console.log(d);



