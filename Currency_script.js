// Request to server using API

// 1. Create Request object
var request=new XMLHttpRequest();

// 2. Open my request connection
request.open('GET','https://api.countrylayer.com/v2/currency/USD?access_key=9a879f8b88adf8e43889ee2316d072eb');

// 3. Sending a request
request.send();

// 4. Data after response
request.onload =function() {
    //console.log(this.response)
var data=JSON.parse(this.response)

for (i=0;i<data.length;i++)
{
  console.log(data[i])
}
}
