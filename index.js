
const results=document.getElementById('results')
document.getElementById('search').addEventListener('click',(e)=>{

    
    e.preventDefault()
    var starting =document.getElementById('starting').value
    var destination =document.getElementById('destination').value
    
    fetch('https://demorailapi.onrender.com/availability')
    .then((response)=>(response.json()))
    .then((data)=>{
        const trains=data
        console.log("trains : ",trains)
        trains.map((train)=>{
            if(starting===train.info.starting && destination===train.info.destination){
                const avail=Object.keys(train.availability)
                console.log("avail",avail)
                results.innerHTML+=`<div class="card">
                <div class="info" id="trainNo">${train.trainno}</div>
                <div class="info" id="trainName">${train.trainname}</div>
                <div class="info" id="timing">
                <div class="info" id ="start">${train.timing.start}</div>
                <div class="info" id ="end">${train.timing.end}</div>
                </div>
                <div class="info" id="availibilty">
                <div class="info" id="berth">
                    
                </div>
                <div class="info" id="seatsno"></div>
                </div>
            </div>`
            }
    })
    })
    .catch((error)=>(console.error(error)));

})
