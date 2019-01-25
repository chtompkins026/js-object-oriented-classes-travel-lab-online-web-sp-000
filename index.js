
class Driver { 
  constructor(name, string){
    this.name = name; 
    this.startDate = new Date(string); 
  }
  
  yearsExperienceFromBeginningOf(date){ 
    let endDate = new Date(date, 1, 1)
    return endDate.getYear() - this.startDate.getYear(); 
  }
  
} //end of Driver class

