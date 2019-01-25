
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

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route { 
  
  
  
} // end of Route class