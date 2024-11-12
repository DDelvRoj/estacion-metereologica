import { IonCardSubtitle, IonCol, IonIcon, IonNote, IonRow } from "@ionic/react";
import { pulseOutline, sunnyOutline, thermometerOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { WeatherData } from "../data/types";

interface WeatherPropertyProps {
  type: "wind" | "feelsLike" | "indexUV" | "pressure";
  currentWeather: WeatherData;
}

export const WeatherProperty: React.FC<WeatherPropertyProps> = ({ type, currentWeather }) => {
  const [property, setProperty] = useState<any>(null);

  // Accedemos a la primera observación de currentWeather
  const observation = currentWeather.observations[0];

  const properties = {
    wind: {
      isIcon: false,
      icon: "/assets/wind.png",
      alt: "wind",
      label: "Viento",
      value: `${observation.metric.windSpeed} m/s`
    },
    feelsLike: {
      isIcon: true,
      icon: thermometerOutline,
      alt: "feels like",
      label: "Sensación Térmica",
      value: `${observation.metric.heatIndex}°C`
    },
    indexUV: {
      isIcon: true,
      icon: sunnyOutline,
      alt: "index uv",
      label: "UV",
      value: observation.uv
    },
    pressure: {
      isIcon: true,
      icon: pulseOutline,
      alt: "pressure",
      label: "Presión",
      value: `${observation.metric.pressure} mbar`
    }
  };

  useEffect(() => {
    setProperty(properties[type]);
  }, [type]);

  if (!property) return null;

  return (
    <IonCol size="6">
      <IonRow className="ion-justify-content-center ion-align-items-center">
        <IonCol size="3">
          {!property.isIcon && <img alt={property.alt} src={property.icon} height="32" width="32" />}
          {property.isIcon && <IonIcon icon={property.icon} color="medium" style={{ fontSize: "2rem" }} />}
        </IonCol>

        <IonCol size="9">
          <IonCardSubtitle>{property.label}</IonCardSubtitle>
          <IonNote>{property.value}</IonNote>
        </IonCol>
      </IonRow>
    </IonCol>
  );
};
