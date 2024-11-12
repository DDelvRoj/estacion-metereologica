import { IonCard, IonCardContent, IonGrid, IonRow, IonText, IonCardTitle } from "@ionic/react";
import { WeatherProperty } from "./WeatherProperty";
import { WeatherData } from "../data/types";

interface CurrentWeatherProps {
  currentWeather: WeatherData;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({ currentWeather }) => {
  const observation = currentWeather.observations[0];

  return (
    <IonGrid>
      <IonCard>
        <IonCardContent className="ion-text-center">
        
          <IonText color="primary">
            <h1>{observation.neighborhood}, <span style={{ color: "gray" }}>{observation.country}</span></h1>
          </IonText>

          <div className="ion-margin-top">
            {/* Aquí puedes añadir un ícono condicional o usar uno específico */}
            <IonText color="dark">
              <h1 style={{ fontWeight: "bold" }}>Condiciones Actuales</h1>
            </IonText>
            
            <IonText color="medium">
              <p>{new Date(observation.obsTimeLocal).toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}</p>
            </IonText>
          </div>

          <IonCardTitle style={{ fontSize: "3rem" }} className="ion-margin-top">{observation.metric.temp}&#8451;</IonCardTitle>

          <IonGrid className="ion-margin-top">
            <IonRow>
              <WeatherProperty type="wind" currentWeather={currentWeather} />
              <WeatherProperty type="feelsLike" currentWeather={currentWeather} />
            </IonRow>

            <IonRow className="ion-margin-top">
              <WeatherProperty type="indexUV" currentWeather={currentWeather} />
              <WeatherProperty type="pressure" currentWeather={currentWeather} />
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </IonGrid>
  );
};