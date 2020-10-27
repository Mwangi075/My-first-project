 
 showTime();

 function showTime(){

     var now=new Date();
     var year=now.getFullYear();
     var month=now.getMonth();
     var monthD=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
     month=monthD[month];
     var day=now.getDay();
     var dayW=["sun","mon","tue","wed","thur","fri", "sat"];
     day=dayW[day];
     var date1=now.getDate();

     var hour= now.getHours();
     var minute=now.getMinutes();
     var second=now.getSeconds();

     if(hour==0){
         hour=12;
     }
     if(hour>12){
         hour=hour-12;
     }
     if(hour<10){
         hour="0" +hour;
     }
     if(minute<10){
         minute="0"+minute;
     }
     if(second<10){
         second="0"+second 
     }

     document.getElementById('dayMonth').innerHTML=  day +" " + date1 + " " + month + " " + year;
     document.getElementById('clock').innerHTML= hour + ":"+ minute + ":" + second;

     setTimeout(showTime,1000);

 }