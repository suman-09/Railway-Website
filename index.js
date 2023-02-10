
const results=document.getElementById('results')
document.getElementById('search').addEventListener('click',(e)=>{

    
    e.preventDefault()
    results.innerHTML="<div></div>"
    
    var starting =document.getElementById('starting').value
    var destination =document.getElementById('destination').value
    var searchedDate =document.getElementById('date').value
    
    fetch('https://demorailapi.onrender.com/availability')
    .then((response)=>(response.json()))
    .then((data)=>{
        const trains=data
        console.log(data)
        trains.map((train)=>{
            if(starting.toLowerCase()===train.info.starting.toLowerCase() && destination.toLowerCase()===train.info.destination.toLowerCase() && train.availability.date.includes(searchedDate.toString())){
                const index=train.availability.date.indexOf(searchedDate)
                results.innerHTML+=`<div class="card">
                <div class="info" id="trainNo">${train.trainno}</div>
                <div class="info" id="trainName">${train.trainname}</div>
                <div class="info" id="timing">
                <div class="info" id ="start">Arrival : ${train.timing.start}</div>
                <div class="info" id ="end">Departure : ${train.timing.end}</div>
                </div>
                <div class="info" id="availibilty">
                <div class="info" id="berth">
                    <div>${train.availability.CC[index]?"CC : "+train.availability.CC[index]:""}</div>
                    <div>${train.availability.S2[index]?"2S : "+train.availability.S2[index]:""}</div>
                    <div>${train.availability.SL[index]?"SL : "+train.availability.SL[index]:""}</div>
                    <div>${train.availability.A1[index]?"1A : "+train.availability.A1[index]:""}</div>
                    <div>${train.availability.A2[index]?"2A : "+train.availability.A2[index]:""}</div>
                    <div>${train.availability.A3[index]?"3A : "+train.availability.A3[index]:""}</div>
                </div>
                <div class="info" id="seatsno"></div>
                </div>
            </div>`
            }
    })
    })
    .catch((error)=>(console.error(error)));

})
