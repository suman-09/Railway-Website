
const results=document.getElementById('results')
document.getElementById('search').addEventListener('click',(e)=>{

    
    e.preventDefault()
    results.innerHTML="<div></div>"
    
    var starting =document.getElementById('starting').value
    var destination =document.getElementById('destination').value
    
    fetch('https://demorailapi.onrender.com/availability')
    .then((response)=>(response.json()))
    .then((data)=>{
        const trains=data

        trains.map((train)=>{
            if(starting===train.info.starting && destination===train.info.destination){

                results.innerHTML+=`<div class="card">
                <div class="info" id="trainNo">${train.trainno}</div>
                <div class="info" id="trainName">${train.trainname}</div>
                <div class="info" id="timing">
                <div class="info" id ="start">${train.timing.start}</div>
                <div class="info" id ="end">${train.timing.end}</div>
                </div>
                <div class="info" id="availibilty">
                <div class="info" id="berth">
                    <div>${train.availability.CC?"CC : "+train.availability.CC:""}</div>
                    <div>${train.availability.S2?"2S : "+train.availability.S2:""}</div>
                    <div>${train.availability.SL?"SL : "+train.availability.SL:""}</div>
                    <div>${train.availability.A1?"1A : "+train.availability.A1:""}</div>
                    <div>${train.availability.A2?"2A : "+train.availability.A2:""}</div>
                    <div>${train.availability.A3?"3A : "+train.availability.A3:""}</div>
                </div>
                <div class="info" id="seatsno"></div>
                </div>
            </div>`
            }
    })
    })
    .catch((error)=>(console.error(error)));

})
