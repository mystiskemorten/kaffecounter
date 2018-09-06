function rapper(what, when) {

    
    
    function loadTemplate(todo) {
        document.body.innerHTML = `
        <div id="victoriadiv">
        <h1 id="timertext">Hvor lenge er det til ${todo} med Victoria?</h1>
        <h2 id="timer"></h2>
        </div>
        
        <div id="fireworks-template">
        <div id="fw" class="firework"></div>
        <div id="fp" class="fireworkParticle"><img src="fireworks.js/image/particles.gif" alt="" /></div>
        </div>
        
        <div id="fireContainer"></div>
        `;
    }
    
    function doStuff(when) {
        
        
        function pad(n) {
            if(n<10) {
                return "0" + n
            }
            return n
        }
        // Set the date we're counting down to
        var countDownDate = new Date(when).getTime();
        
        // Update the count down every 1 second
        var x = setInterval(function() {
            
            // Get todays date and time
            var now = new Date().getTime();
            
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Output the result in an element with id="demo"
            document.getElementById("timer").innerHTML = days + (days == 1 ? " day, " : " days, ")  + pad(hours) + ":"
            + pad(minutes) + ":" + pad(seconds);
            
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                var r=4+parseInt(Math.random()*16);for(var i=r; i--;){setTimeout('createFirework(8,14,2,null,null,null,null,null,Math.random()>0.5,true)',(i+1)*(1+parseInt(Math.random()*1000)));}
                document.getElementById("timer").innerHTML = "♡ NOW! ♡";
            }
        }, 1000);
    }
    
    
    loadTemplate(what);
    doStuff(when);
}