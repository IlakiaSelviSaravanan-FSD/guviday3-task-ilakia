var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result =JSON.parse(request.response)
    console.log(result);


for(var i=0;i<result.length;i++){
    var countrynames=result[i].name.common;
    var subregion=result[i].subregion;
    var population=result[i].population;
    var region=result[i].region;
    console.log("countrynames:"+countrynames);
    console.log("subregion:"+subregion);
    console.log("population:"+population);
    console.log("region:"+region);
       }
    }