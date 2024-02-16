const display = document.querySelector('#display');
const usrN = document.querySelector('#userName');
const checkBtn = document.querySelector('#checkBtn');
const yesBtn = document.querySelector('#y');
const noBtn = document.querySelector('#n');
const video = document.getElementById("myVideo");


function password() {
    const userName = document.querySelector('#myText').value.toLowerCase();
    console.log(userName);
        usrN.textContent = `${userName} `;
        display.textContent = `, I have question for you.`;
        document.querySelector('#myText').style.opacity = 0 ;
        document.querySelector('#checkBtn').style.opacity = 0 ;
      
        document.querySelector('#yN').style.opacity = 1 ;
        document.querySelector('#qA').style.opacity = 1 ;
       
}

 const yesButton = document.getElementById("y");
 const noButton = document.getElementById("n");
 const asr = document.getElementById("answer");
 const contButton = document.getElementById("cont");
 let condition = true;



 function answerSelected(answer) {
    document.querySelector('#yN').style.opacity = 0 ;
    document.querySelector('#qA').style.opacity = 0 ;
    document.querySelector('#display').style.opacity = 0 ;
    document.querySelector('#userName').style.opacity = 0 ;
    document.querySelector('#cont').style.opacity = 1 ;
     if (answer === "Yes") {
        asr.textContent = 'within the streets lies a realm where humanity intertwines, offering a glimpse of a future where dreams can be reshaped';
         console.log("Yes was selected!");
            let video = document.createElement("video");
        
            video.width = 320;
            video.height = 240;
         
            video.autoplay = true;
            video.loop = true;
            video.innerHTML = '<source src="vids/vidOne.mp4" type="video/mp4">';
            video.style.width = "100%";
            video.style.height = "100%";
            videoContainer.appendChild(video);
        
     } else if (answer === "No") {
        asr.textContent = 'the allure is but a fleeting illusion, a reflection of our desires fading with each passing raindrop, leaving only the cold embrace of reality';
         console.log("No was selected!");
         let video = document.createElement("video");
         video.width = 320;
         video.height = 240;
      
         video.autoplay = true;
         video.loop = true;
         video.innerHTML = '<source src="vids/vidTwo.mp4" type="video/mp4">';
         video.style.width = "100%";
         video.style.height = "100%";
         videoContainer.appendChild(video);
       
     }

     
 }

contButton.onclick = myFunction;

 function myFunction() {
    document.querySelector('#answer').style.opacity = 0 ;
    document.querySelector('#cont').style.opacity = 0 ;
   
    
  }
 
 yesButton.addEventListener("click", function() {

    answerSelected("Yes");
});

noButton.addEventListener("click", function() {

    answerSelected("No");
});
checkBtn.addEventListener('click', password);

