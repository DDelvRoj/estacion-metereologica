// types.ts

export interface Observation {
    stationID: string;
    obsTimeUtc: string;
    obsTimeLocal: string;
    neighborhood: string;
    softwareType: string | null;
    country: string;
    solarRadiation: number;
    lon: number;
    realtimeFrequency: number | null;
    epoch: number;
    lat: number;
    uv: number;
    winddir: number;
    humidity: number;
    qcStatus: number;
    metric: {
      temp: number;
      heatIndex: number;
      dewpt: number;
      windChill: number;
      windSpeed: number;
      windGust: number;
      pressure: number;
      precipRate: number;
      precipTotal: number;
      elev: number;
    };
}

export interface WeatherData {
    observations: Observation[];
}

export interface ForecastData {
    calendarDayTemperatureMax: number[];
    calendarDayTemperatureMin: number[];
    dayOfWeek: string[];
    expirationTimeUtc: number[];
    moonPhase: string[];
    moonPhaseCode: string[];
    moonPhaseDay: number[];
    moonriseTimeLocal: string[];
    moonriseTimeUtc: number[];
    moonsetTimeLocal: string[];
    moonsetTimeUtc: number[];
    narrative: string[];
    qpf: number[];
    qpfSnow: number[];
    sunriseTimeLocal: string[];
    sunriseTimeUtc: number[];
    sunsetTimeLocal: string[];
    sunsetTimeUtc: number[];
    temperatureMax: number[];
    temperatureMin: number[];
    validTimeLocal: string[];
    validTimeUtc: number[];
    daypart: Daypart[];
}

export interface Daypart {
    cloudCover: number[];
    dayOrNight: string[];
    daypartName: string[];
    iconCode: number[];
    iconCodeExtend: number[];
    narrative: string[];
    precipChance: number[];
    precipType: string[];
    qpf: number[];
    qpfSnow: number[];
    qualifierCode: (string | null)[];
    qualifierPhrase: (string | null)[];
    relativeHumidity: number[];
    snowRange: string[];
    temperature: number[];
    temperatureHeatIndex: number[];
    temperatureWindChill: number[];
    thunderCategory: (string | null)[];
    thunderIndex: number[];
    uvDescription: string[];
    uvIndex: number[];
    windDirection: number[];
    windDirectionCardinal: string[];
    windPhrase: string[];
    windSpeed: number[];
    wxPhraseLong: string[];
    wxPhraseShort: string[];
}
