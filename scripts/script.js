const getDescription = (data)=>{
    if(data.data.values.cloudCover < 30) return 'Sunny'
    else if(data.data.values.cloudCover >= 30 && data.data.values.cloudCover <= 50) return 'Partially Sunny'
    else  return 'Cloudy'
}

$(document).ready(()=>{

    fetchCalgaryWeather().then((data)=>{
        console.log(data)
        const currentTemp = data.data.values.temperature
        const weatherDescription = getDescription(data)

        $('body').append($(
            `
            <div>
                <h1>Calgary Weather</h1>
                <h2>Temp: ${currentTemp}C</h2>
                <p>${weatherDescription}</p>
            </div>
            `
        ))        
    })
    .catch((error)=>{
        console.log(error.message)
    })

})


const fetchCalgaryWeather = ()=>{
    //const username = 'bvc_benjumeavillarraga_daniel';
    //const password = '5U8Ka1smxB';
    //const authString = ``;
    //const encodedAuthString = btoa(authString);
    return fetch('https://api.tomorrow.io/v4/weather/realtime?location=51.0456064,-114.057541',{
        headers:{
            'Accept': 'application/json',
            "apikey":"nYfAw2OLiTBJe6FowNPwLpMKl98XrN7E"
        }
    }).then((response)=>{
        if(!response.ok) throw new Error('Unable to get calgary weather....')
        return response.json()
    })
}
//'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=nYfAw2OLiTBJe6FowNPwLpMKl98XrN7E'
//'https://api.meteomatics.com/2024-03-27T10:20:00.000-06:00/t_2m_1d_efi:idx/51.0456064,-114.057541/json
/*
    $('body'.append(
        `
        <div>
            <h1>Calgary</h1>
            <h2>${}</h2>
            <p></p>
        </div>
    `
    ))*/