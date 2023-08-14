const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=fb29b583cfbfced770e5b186bbb7fc59`;
async function weather(city){
  let response= await  fetch(url+`&q=${city}`)
  let data = await response.json(); 
  console.log(data)
  document.getElementById('city-name').innerHTML=data.name;
  document.getElementById('temp').innerHTML=Math.round( data.main.temp)+"°C";
  document.getElementById('humidity').innerHTML=data.main.humidity+"%";
  document.getElementById('wind').innerHTML=data.wind.speed+"m/s";
 let time=new Date().getHours()-15+(data.timezone/3600)
 let t=new Date();
//  console.log(t.getTime())
//  console.log(t.getTimezoneOffset()*-60000)
//  console.log(data.timezone*1000)
// console.log(t.getTime()-t.getTimezoneOffset()*-60000+(data.timezone*1000))
let msTime=t.getTime()-t.getTimezoneOffset()*-60000+(data.timezone*1000);
// console.log(msTime)
// console.log(new Date(t.getTime()-t.getTimezoneOffset()*-60000+(data.timezone*1000)).toLocaleString())
// console.log(new Date(msTime).toLocaleString())
let datenow=new Date(msTime).toLocaleString();
document.getElementById("date").innerHTML=datenow;
if((msTime/1000)>data.sys.sunset){
  document.getElementsByTagName('main')[0].style.backgroundImage=`url("./img/82d40b41-63cf-4a40-930d-d890d5684dd1.jpg")`
  document.body.style.backgroundColor="#4A4F49";
  document.body.style.color="white";
}
else{
  document.getElementsByTagName('main')[0].style.backgroundImage=`url("./img/sl_031821_41530_221.jpg")`
  document.body.style.backgroundColor="#9dcfec";
  document.body.style.color="#222";


}
 // document.querySelector('#icon img').setAttribute('src',`http://openweathermap.org/img/w/${data.weather[0].icon}.png`)
document.getElementById("desc").innerHTML=data.weather[0].main;
let icon=data.weather[0].main;
document.querySelector('#icon img').setAttribute('src',`weather-img/${icon}.png`)

}

document.getElementsByTagName('button')[0].onclick=()=>{
let city=document.querySelector('input').value;
weather(city);
}
