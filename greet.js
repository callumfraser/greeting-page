var name1 = document.querySelector('.theName');
var btn = document.querySelector('.theButton');
var greeting = document.querySelector('.output');
var jCounter = document.querySelector('.counter');
var lang1 = document.getElementsByName('language');
var namesGreeted = {};
var btn2 = document.querySelector('.theOtherBut');

if(typeof(localStorage.count)==undefined){
  localStorage.setItem("count",0);
}
if (localStorage.count == undefined){
  jCounter.innerHTML = "Friends greeted today: 0"  
} else{
  jCounter.innerHTML = "Friends greeted today: " + localStorage.count;
}



btn.addEventListener('click', function(){
if (namesGreeted[name1.value] !== undefined){
  greeting.innerHTML = "Hello/Molo/Hallo, " + name1.value + " and thanks for requesting another greet!"
  return;
}
namesGreeted[name1.value] = 1;
  if (name1.value.length > 0){
      for (var i=0; i<3; i++){
        if (lang1[i].checked){
          switch(i){
            case 0:
            greeting.innerHTML = "Molo, " + name1.value;
            localStorage.count ++;
            jCounter.innerHTML = "Friends greeted today: " + localStorage.count;
            break;
            case 1:
            greeting.innerHTML = "Hello, " + name1.value;
            localStorage.count ++;
            jCounter.innerHTML = "Friends greeted today: " + localStorage.count;
            break;
            case 2:
            greeting.innerHTML = "Hallo, " + name1.value;
            localStorage.count ++;
            jCounter.innerHTML = "Friends greeted today: " + localStorage.count;
          }
        }

      };
      document.getElementById("myForm").reset();
}
else {greeting.innerHTML = "Please enter your name to get a response! There is NO way we can guess your name";
};
});



btn2.onclick = function(){
  window.localStorage.setItem("count",0);
  jCounter.innerHTML = "Friends greeted today: " + localStorage.count;
  greeting.innerHTML = "Your greeting will appear here friend"
}
