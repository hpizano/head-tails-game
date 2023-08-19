function convertToMeters(yards){
    return yards * 0.9144;
  }
  
  function createMessage (yards, meters) {
    let message = '';
    const numYards = yards * 1 ;
    
    if (numYards === 1760 ) {
      message = 'That is as long as a mile.';
    }
    else if (numYards === 100) {
      message = 'That is as long as a football field';
    }
    
    else if (numYards === 26) {
      message = 'That is as long as a Tennis Court';
    }
    return `${yards} yards is ${meters} meters. ${message}`;
  }
  
  
  let inputYards = window.prompt('Input an amount of Yards.');
  let convertedMeters = convertToMeters(inputYards);
  
  let msg = createMessage(inputYards, convertedMeters);
  
  console.log(msg)