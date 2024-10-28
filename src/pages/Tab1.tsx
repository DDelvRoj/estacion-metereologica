import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, isPlatform } from '@ionic/react';

import { useEffect, useState } from 'react';
import { SkeletonDashboard } from '../components/SkeletonDashboard';
import { refreshOutline } from 'ionicons/icons';
import { CurrentWeather } from '../components/CurrentWeather';

const Tab1 = () => {

  const [currentWeather, setCurrentWeather] = useState<any>(false);

  useEffect(() => {

    getCurrentPosition();
    
  }, []);

  const getCurrentPosition = async () => {

    setCurrentWeather(false);

    const coordenadaEstatica = {
      latitude:'-25.483902792541123',
      longitude:'-54.671193362970264'
    };
   

    getAddress(coordenadaEstatica);
  }

  const getAddress = async (coords:any) => {

    const query = `${ coords.latitude },${ coords.longitude}`;
    
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f93eb660b2424258bf5155016210712&q=${ query }`);
    
    const data = await response.json();
    console.log(data);
    
    setCurrentWeather(data);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Clima</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={() => getCurrentPosition()}>
              <IonIcon icon={refreshOutline} color="primary" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Casa</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRow className="ion-margin-start ion-margin-end ion-justify-content-center ion-text-center">
          <IonCol size="12">
            <h4>Datos del clima</h4>
          </IonCol>
        </IonRow>

        <div style={{marginTop: "-1.5rem"}}>
          {currentWeather ? <CurrentWeather currentWeather={currentWeather} /> : <SkeletonDashboard />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
