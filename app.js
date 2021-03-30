const current_time = document.getElementById("time");
const class_day = document.getElementById("setDay");
const subject = document.getElementById("setClass");
const class_time = document.getElementById("setTime");
const space= document.getElementById("space");
const haha = document.getElementById("haha");
var state = false;

//Displaying current day
setInterval(() => {
    var d = new Date();
    var n = d.toLocaleTimeString();
    var current_day = d.getDay();
    var week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednesday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";
         current_time.innerHTML=n+""+week[current_day];
        //current_time.innerHTML=week[current_day];
    
}, 1000);


 

 function showNotification(userSubject){
    const notification = new Notification("hiii machiii",{
        body:"whats going on??",
        icon:"pexels-simon-migaj-747964.jpg"
    });
        window.location.href = userSubject;
        target = "_blank"
    
 }

 


if(Notification.permission === "default"){
   Notification.requestPermission();
  
}


//Adding to local storage

function setAlarm(){
    var classDay = class_day.value;
    var Subject = subject.value;
    var classTime = class_time.value;
     
    var new_Data = {
        userDay : classDay ,
        userSubject : Subject ,
        userTime : classTime
    }

    //checking if local storage is null
    if(localStorage.getItem('links') == null)
    {
        localStorage.setItem('links','[]');
    }
    //get old data and appends it with new data
    var old_Data = JSON.parse(localStorage.getItem('links'));
    old_Data.push(new_Data);
    //save both data in local storage
    localStorage.setItem('links',JSON.stringify(old_Data));
}
 
    setInterval(()=>{
         
    var d = new Date();
    var n = d.toLocaleTimeString();
    var current_day = d.getDay();
    var week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednesday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";
    var text = JSON.parse(localStorage.getItem('links'));

        
        for(var i=0 ; i < text.length ; i++){
        if(text[i].userDay === week[current_day] && text[i].userTime === n)
        {   
            if(Notification.permission === "granted" ){
                showNotification(text[i].userSubject);
                
        }
        else if(Notification.permission === "denied"){
            alert("Please give allow to get notification!");
        }
            space.innerHTML = "time is " + text[i].userTime ;
            state = true;
            
        }
    }

    },1000)


    /*for(var i=0 ; i < myObj.length ; i++){
        if(myObj[i].userDay === week[currentDay])
        {


        }
        if(myObj[i].userTime === n)
        {   
            if(Notification.permission === "granted" ){
                showNotification(myObj[i].userSubject);
                
        }
        else if(Notification.permission === "denied"){
            alert("Please give allow to get notification!");
        }
            space.innerHTML = "time is " + myObj[i].userTime ;
            
            
            
            
        
            state = true;
            console.log("pause");
        }
    }

    },1000)
    
}*/
