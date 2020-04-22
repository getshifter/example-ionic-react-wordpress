import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { librarySharp, home } from 'ionicons/icons';
import './Menu.css';
import config from '../config';
import {
WPCategory
} from '../wp.interface'

const Menu: React.FC = () => {
  const location = useLocation();

  const [siteName, setSiteName] = useState('loading...')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState<WPCategory[]>([])
  
  useEffect(() => {
    // Load site metadata
    config.wpClient.root().then(data => {
      setSiteName(data.name)
      setDescription(data.description)
    })
    // Load categories
    config.wpClient.categories().perPage(100).param({parent: 0})
    .then((data: WPCategory[]) => {
      setCategories(data.sort((a, b) => {
        if( a.id < b.id ) return -1;
        if( a.id > b.id ) return 1;
        return 0;
      }))
    })
  }, [])
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
              <IonLabel>
                {siteName}
              </IonLabel>
          </IonListHeader>
          <IonNote>{description}</IonNote>
          <IonMenuToggle autoHide={false}>
            <IonItem className={location.pathname === '/page' ? 'selected' : ''} routerLink="/" routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" icon={home} />
              <IonLabel>Home</IonLabel>
            </IonItem>
          </IonMenuToggle>
          </IonList>
        <IonList id="inbox-list">
          <IonListHeader><IonLabel>Categories</IonLabel></IonListHeader>
          {categories.map(category => {
            const path = `/page/${category.slug}`
            return (
              <IonMenuToggle key={category.id} autoHide={false}>
                <IonItem className={location.pathname === path ? 'selected' : ''} routerLink={path} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={librarySharp} />
                  <IonLabel>{category.name}</IonLabel>
                </IonItem>
              </IonMenuToggle>
          )}
          )}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
