/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let days = [0,0,0,0,0];
var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
var wed = document.getElementById('wednesday');
var thu = document.getElementById('thursday');
var fri = document.getElementById('friday');
let daysSelected = 0;


	




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
mon.addEventListener("click", () => {
    if(days[0] !== 1) {
        days[0] = 1;
    }
    calculator(days);
    mon.classList.add("clicked");
});
tue.addEventListener("click", () => {
    if(days[1] !== 1) {
        days[1] = 1;
    }
    calculator(days);
    tue.classList.add("clicked");
});
wed.addEventListener("click", () => {
    if(days[2] !== 1) {
        days[2] = 1;
    }
    calculator(days);
    wed.classList.add("clicked");
});
thu.addEventListener("click", () => {
    if(days[3] !== 1) {
        days[3] = 1;
    }
    calculator(days);
    thu.classList.add("clicked");
});
fri.addEventListener("click", () => {
    if(days[4] !== 1) {
        days[4] = 1;
    }
    calculator(days);
    fri.classList.add("clicked");
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.getElementById("clear-button");
clearButton.onclick = reloadPage;

function reloadPage(){
    window.location.reload();
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDay (){
    let dayChoice = document.querySelectorAll('span');
    dayChoice.forEach(span => {
        span.addEventListener('click', function(){
            dayChoice.forEach(span => span.classList.remove('clicked'));
            this.classList.add('clicked');
        });
        
    });
    halfCalculator ();        
}
function halfCalculator (){
    (daysSelected =0, result2 =0);
    for(let i=0; i<days.length; i++) {
		if(days[i] != 0) {
			daysSelected += 1;
		}
	}
    var halfCost= daysSelected* 20;
    var result2 = parseFloat(halfCost);
    document.getElementById("calculated-cost").innerText = result2;
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDay (){
    let dayChoice = document.querySelectorAll('span');
    dayChoice.forEach(span => {
        span.addEventListener('click', function(){
            dayChoice.forEach(span => span.classList.remove('clicked'));
            this.classList.add('clicked');
        });
        
    });
            
    fullCalculator ();        
}
function fullCalculator (){
    (daysSelected =0, result1 =0);
    for(let i=0; i<days.length; i++) {
		if(days[i] != 0) {
			daysSelected += 1;
		}
	}
    var fullCost= daysSelected* 35;
    var result1 = parseFloat(fullCost);
    document.getElementById("calculated-cost").innerText = result1;
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate valuefunction calculate(days) {
function calculator()	{	
    let daysSelected = 0;
	for(let i=0; i<days.length; i++) {
		if(days[i] != 0) {
			daysSelected += 1;
		}
        
	}
}


