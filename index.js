
class Driver { 
  constructor(name, string){
    this.name = name; 
    this.string = string; 
  }
  
  startDate() {
    var parts = this.string.split("-")
    return new Date(parts[2], parts[1] - 1, parts[0])
  }
  
  
  
} //end of Driver class