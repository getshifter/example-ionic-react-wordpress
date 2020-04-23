import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonBackButton } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import config from '../config';

const Layout: React.FC<{
    children: React.ReactChild | React.ReactChild[];
} & RouteComponentProps> = (props) => {
    const [siteName, setSiteName] = useState('loading...')
    const {children, match} = props
    useEffect(() => {
        config.wpClient.root().then(data => {
            setSiteName(data.name)
        })
    }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            {match.url === '/' ? null: (
                <IonBackButton />
            )}
          </IonButtons>
          <IonTitle>{siteName}</IonTitle>
          <IonButtons slot="end">
            <IonMenuButton />
            </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default withRouter(Layout);
