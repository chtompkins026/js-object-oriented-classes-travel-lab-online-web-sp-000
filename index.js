
class Driver { 
  constructor(name, string){
    this.name = name; 
    this.startDate = new Date(string); 
  }
  
  yearsExperienceFromBeginningOf(date){ 
    let endDate = new Date(date, 1, 1)
    return endDate.getYear() - startDate.getYear(); 
    
  }
  
} //end of Driver class