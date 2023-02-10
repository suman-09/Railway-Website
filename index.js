
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
                <div class="card-header">
                <div class="info" id="trainNo">${train.trainname} (${train.trainno})</div>

                </div>
                <div class="info" id="timing">
                <div class="info" id ="start"><b>Arrival | </b> ${train.info.starting} |${train.timing.start} </div>
                <div class="info" id ="end">${train.timing.end} | ${train.info.destination} | <b> Departure</b></div>
                </div>
                <div class="info" id="availibilty">
                <div class="info" id="berth-container">
                    <div class="berth"><div class='berth-text'>CC</div><div class="berth-value">${train.availability.CC[index]?train.availability.CC[index]:"NA"}</div></div>
                    <div class="berth"><div class='berth-text'>SL</div><div class="berth-value">${train.availability.SL[index]?train.availability.SL[index]:"NA"}</div></div>
                    <div class="berth"><div class='berth-text'>1A</div><div class="berth-value">${train.availability.A1[index]?train.availability.A1[index]:"NA"}</div></div>
                    <div class="berth"><div class='berth-text'>2A</div><div class="berth-value">${train.availability.A2[index]?train.availability.A2[index]:"NA"}</div></div>
                    <div class="berth"><div class='berth-text'>3A</div><div class="berth-value">${train.availability.A3[index]?train.availability.A3[index]:"NA"}</div></div>
                    <div class="berth"><div class='berth-text'>2S</div><div class="berth-value">${train.availability.S2[index]?train.availability.S2[index]:"NA"}</div></div>
                </div>
                <div class="info" id="seatsno"></div>
                </div>
            </div>`
            
            
            }
    })
    })
    .catch((error)=>(console.error(error)));

})