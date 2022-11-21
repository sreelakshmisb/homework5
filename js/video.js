// Add js here.

//video initialization
var video_element = document.getElementById('videoplayer');

window.addEventListener('load', function(){
    //console.log('The page has loaded');
    video_element.preload = 'metadata';
    video_element.autoplay = false;
    video_element.loop = false;
    
});

//play functionality
let play_button = document.getElementById('play');
play_button.addEventListener('click', function(){
   video_element.play();
});

//pause functionality
let pause_button = document.getElementById('pause');
pause_button.addEventListener('click', function(){
   video_element.pause();
});


//speed up video
let fast_button = document.getElementById('faster');
fast_button.addEventListener('click', function(){
    let rate =  video_element.playbackRate;
    if(rate==0.5)
        video_element.playbackRate = 1;
    else if(rate==1)
        video_element.playbackRate  = 2;
    else
        window.alert("Video is at fastest speed!");
    //console.log(video_element.playbackRate);
 });



//slow down video
let slow_button = document.getElementById('slower');
slow_button.addEventListener('click', function(){
    let rate =  video_element.playbackRate;
    if(rate==2)
        video_element.playbackRate = 1;
    else if(rate==1)
        video_element.playbackRate  = 0.5;
    else
        window.alert("Video is at slowest speed!");
    //console.log(video_element.playbackRate);
 });


//skip functionality
let skip_button = document.getElementById('skip');
skip_button.addEventListener('click', function(){
    let newTime = video_element.currentTime + 15;
    if(newTime > video_element.duration)
        video_element.currentTime = 0;
    else
        video_element.currentTime =  newTime;
    
});


//Mute functionality
let mute_button = document.getElementById('mute');
mute_button.addEventListener('click', function(){
    if(video_element.muted){
        video_element.muted=false;
        mute_button.innerHTML='Mute';
    }
    else{
        video_element.muted=true;  
        mute_button.innerHTML='Unmute';
    }
});


//Volume slider 
let vol_slider = document.getElementById('slider');
let vol_display = document.getElementById('volume');
vol_display.innerHTML = '100%';
vol_slider.addEventListener('change', function(){
    let vol_display = document.getElementById('volume');
    vol_display.innerHTML = vol_slider.value + '%';
    video_element.volume= vol_slider.value/100;
});


