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
            <IonTitle size="large">My AWay App</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        <IonSearchbar></IonSearchbar>
      <IonSearchbar placeholder="Custom Placeholder"></IonSearchbar>
      <IonSearchbar disabled={true} placeholder="Disabled"></IonSearchbar>
      <IonSearchbar value="Value"></IonSearchbar>
      <IonSearchbar animated={true} placeholder="Animated"></IonSearchbar>
      </IonContent>
    </IonPage>
  );
};
export default Home;
