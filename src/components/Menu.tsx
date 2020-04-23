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
import {
  useMediaQuery
} from 'react-responsive'
import React, { useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { librarySharp, home, readerOutline } from 'ionicons/icons';
import './Menu.css';
import config from '../config';
import {
WPCategory, WPPosts
} from '../wp.interface'
import { createRelativeLink } from '../helpers/url';

const Menu: React.FC = () => {
  const location = useLocation();

  const [siteName, setSiteName] = useState('loading...')
  const [description, setDescription] = useState('')
  const [categories, setCategories] = useState<WPCategory[]>([])
  const [pages, setPages] = useState<WPPosts>([])
  
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
    // Load pages
    config.wpClient.pages().perPage(100)
    .then((data: WPPosts) => {
      setPages(data.sort((a,b) => {
        if( a.id < b.id ) return -1;
        if( a.id > b.id ) return 1;
        return 0;
      }))
    })
  }, [])
  const isDesktop = useMediaQuery({ minWidth: 992 })
  const side = useMemo(() => isDesktop ? 'start' : 'end', [isDesktop])
  return (
    <IonMenu contentId="main" type="overlay" side={side}>
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
            const path = `/category/${category.slug}`
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
        <IonList id="inbox-list">
          <IonListHeader><IonLabel>Pages</IonLabel></IonListHeader>
          {pages.map(page => {
            const path = createRelativeLink( config.pageURLPrefix, page.slug)
            return (
              <IonMenuToggle key={page.id} autoHide={false}>
                <IonItem className={location.pathname === path ? 'selected' : ''} routerLink={path} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" icon={readerOutline} />
                  <IonLabel>{page.title.rendered}</IonLabel>
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
