 const request = require('request');
 const breed = process.argv[2];
 const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    // console.error('error:', error);
  if(error){
    callback('error:', error);  // Print the error if one occurred
    return   
    } 
  
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for 
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    if(data[0]){
      callback(data[0]['description']);
    }else{
      callback('Incorrect breed input')
    }
  
  
  

  })}




 module.exports = { fetchBreedDescription };