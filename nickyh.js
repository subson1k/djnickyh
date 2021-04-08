
 //This is the js file for the Nicky H App project. 


 //top tag which displays the menu

 document.getElementById('tag1').onclick = function(){

  document.getElementById('menuDiv').style.display = 'block';

 }

 // hide menu after it has been displayed

 document.getElementById('menuPlus').onclick = function(){

   document.getElementById('menuDiv').style.display = 'none';

 }

//variables and function to make audio play and pause , with animation
       
    let myAudio;
    let renzy = document.getElementById('vinylRenzy');
   
    let A = '';
// repalce Audio1-2-3..... with relevent variables. Default variables are written in order.
  function spinVinyl(Audio1,Audio2){
    if(A == 0){
      Audio1.style.animation = 'vinylSpin 1s linear infinite';
      Audio2.play()
      return A = 1;
    }else{
      Audio1.style.animation = 'spinBack 1s ease-in-out 1 forwards';
      Audio2.pause()
      return A = 0;
    }

  }

  //variables and function to make audio spin back 60 seconds , with animation

    let theAudio = document.getElementById('spinBack');
    let renzy2 = document.getElementById('vinylRenzy2');
    let O = '';
   function spinVinyl2(Audio01,Audio02){ 
    
      
    if(O == 0){
      Audio01.style.animation = 'rewind 1s ease-in-out forwards';
      Audio02.currentTime -= 60;
      return O = 1;
    }else{
      Audio01.style.animation = 'rewinder 1s ease-in-out 1 forwards';
      Audio02.currentTime -= 60;
      return O = 0;
    }
  }

  let B = '';

  function spinForward(Audio001,Audio002){ 
    
      
    if(B == 0){
      Audio001.style.animation = 'forward 1s ease-in-out forwards';
      Audio002.currentTime += 60;
      return B = 1;
    }else{
      Audio001.style.animation = 'forwards 1s ease-in-out 1 forwards';
      Audio002.currentTime += 60;
      return B = 0;
    }
  }

// variables containing the audio player references.  

let play1 = document.getElementById('player');
let play2 = document.getElementById('player2');
let play3 = document.getElementById('player3');
let play4 = document.getElementById('player4');

// variables for video player

let vidClose = document.getElementById('closeVid');
let vid = document.getElementById('vid');

let vidPlayBut = document.getElementById('vidPlay');

let shutVideo = () =>{

  vid.style.animation = 'vidDisappear 1s linear forwards';
  vidClose.style.display = 'none';
  vid.pause();

}



// after this comment are various button tags that have been assigned functions to control the Audio 

  document.getElementById('butt').onclick = function(){
      
    spinVinyl(renzy,myAudio);
    
    
  }


   document.getElementById('backbutt').onclick = function(){

    spinVinyl2(renzy2,myAudio);
   
      
    }
   
   
    
   

    document.getElementById('forwardbutt').onclick = function(){
    
      spinForward(renzy2,myAudio);


   }
 
   document.getElementById('X').onclick = function(){

     document.getElementById('playerPopUp').style.display = 'none';
     myAudio.pause();
     renzy.style.animation = 'none';
     A = 0;
   }

//onclick renzyactiv changes track to renzy mix

   document.getElementById('renzyActiv').onclick = function(){

    document.getElementById('playerPopUp').style.display = 'block';
    document.getElementById('playerPopUp').style.backgroundColor = ' rgb(61, 60, 60)';
    myAudio = document.getElementById('player');
    document.getElementById('track1p').src = 'playaRenzy1.png';
    document.getElementById('menuDiv').style.display = 'none';
    renzy.style.animation = 'none';
    play1.pause();
    play2.pause();
    play3.pause();
    play4.pause();
    A = 0;
    shutVideo();
   }

  //onclick striclyactiv changes track and html to strickly vinyl mix 

   document.getElementById('striclyActiv').onclick = function(){

    document.getElementById('playerPopUp').style.display = 'block';
    document.getElementById('playerPopUp').style.backgroundColor = ' rgb(53, 2, 2)';
    myAudio = document.getElementById('player2');
    document.getElementById('track1p').src = 'playaStrictly0.png';
    document.getElementById('menuDiv').style.display = 'none';
    renzy.style.animation = 'none';
    play1.pause();
    play2.pause();
    play3.pause();
    play4.pause();
    A = 0;
    shutVideo();
   }

    //onclick junglistactiv changes track and html to junglist network mix 

    document.getElementById('junglistActiv').onclick = function(){

      document.getElementById('playerPopUp').style.display = 'block';
      document.getElementById('playerPopUp').style.backgroundColor = ' rgb(7, 116, 124)';
      myAudio = document.getElementById('player3');
      document.getElementById('track1p').src = 'playaJunglist0.png';
      document.getElementById('menuDiv').style.display = 'none';
      renzy.style.animation = 'none';
      play1.pause();
      play2.pause();
      play3.pause();
      play4.pause();
      A = 0;
      shutVideo();
     }

      //onclick techactiv changes track and html to tech house mix 

   document.getElementById('techActiv').onclick = function(){

    document.getElementById('playerPopUp').style.display = 'block';
    document.getElementById('playerPopUp').style.backgroundColor = ' rgb(72, 42, 182)';
    myAudio = document.getElementById('player4');
    document.getElementById('track1p').src = 'playaTech0.png';
    document.getElementById('menuDiv').style.display = 'none';
    renzy.style.animation = 'none';
    play1.pause();
    play2.pause();
    play3.pause();
    play4.pause();
    A = 0;
    shutVideo();
   }
   
  // close video cross tag show function below
   
 

   function closeVideo(){
    vidClose.style.display = 'block'; 
    vidClose.style.animation = 'vidClose 1s linear forwards';
   }


  
 
 // video appear function  
   document.getElementById('vidActiv').onclick = () =>{

   vid.style.animation = 'vidAppear 1s linear forwards';
   setTimeout(closeVideo ,1500); 
   document.getElementById('playerPopUp').style.display = 'none';
   myAudio.pause();
   renzy.style.animation = 'none';
   A = 0;
  
   }  
   
  // close the video 


   vidClose.onclick = () => shutVideo();

    
   
     
   
  
   
    
   
  

     
 

  

     
   
 
