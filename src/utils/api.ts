// noinspection UnnecessaryLocalVariableJS

const OPEN_WEATHER_API_KEY = '5fa61d69ea3bb5ea1d79055cd75b6dbe' //Test key

export interface OpenWeatherData {
    name: string
    main: {
        feels_like: number
        humidity: number
        pressure: number
        temp: number
        temp_max: number
        temp_min: number
    }
    weather: {
        description: string
        icon: string
        id: number
        main: string
    }[]
    wind: {
        deg: number
        gust: number
        speed: number
    }
}

export async function fetchOpenWeatherData(city: string): Promise<OpenWeatherData> {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPEN_WEATHER_API_KEY}`)

    if (!res.ok) {
        throw new Error('City not found')
    }

    const data: OpenWeatherData = await res.json()
    
    return data
}