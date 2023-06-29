import React from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle>My App</IonTitle>
          <IonButton>vggvg</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My AWay </IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Hello from Karan</h1>
        <h1>Hello from Caoimhe</h1>
      </IonContent>
    </IonPage>
  );
};
export default Home;
