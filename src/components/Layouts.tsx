import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

const Layout: React.FC<{
    children: React.ReactChild | React.ReactChild[];
    name: string;
} & RouteComponentProps> = (props) => {
    const {children, name, match} = props
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
            {match.url === '/' ? null: (
                <IonButton href="/">Back</IonButton>
            )}
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Layout);
