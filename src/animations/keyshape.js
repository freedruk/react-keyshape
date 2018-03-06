const playpause = (player, keyshapeElement) => {
                        let isPlaying = true;
                        keyshapeElement.addEventListener('click', (event) => {
                            if(isPlaying){
                                player.pause();
                                isPlaying = false;
                            }
                            else{
                                player.play();
                                isPlaying = true;
                            }
                        });
                    };

const colorTransform =  (player, keyshapeElement)=>{
                        setInterval(() =>{
                          let timeHex = new Date().getTime().toString(16)
                          let color = timeHex.substring(timeHex.length-6);
                          let lines = keyshapeElement.querySelectorAll("[id^='line']");
                          
                          for(let i = 0; i < lines.length; i++){
                            lines[i].style.fill = color;
                          }
                        }, 200);
                    };

const scaleOverTime = (player, keyshapeElement)=>{
                        let scaleFactor = 0.02;
                        let direction = 1;
                        let scale = 1;

                        setInterval(() =>{
                          if(scale < 1 || scale > 1.2)
                            direction = direction*-1;

                          scale += (scaleFactor*direction); 
                          keyshapeElement.style.transform = "scale(" + scale + ")";
                        }, 100);            
                    }
const resetAnimation = (player, keyshapeElement) => {
                        keyshapeElement.addEventListener('click', (event) => {
                            player.time(0);
                        });
                    }

export { playpause, colorTransform, scaleOverTime, resetAnimation };