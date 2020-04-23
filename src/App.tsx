import Menu from './components/Menu';
import Page from './pages/Page';
import React from 'react';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/Home';
import Category from './pages/Category';
import Post from './pages/Post';
import config from './config';
import { createRelativeLink } from './helpers/url';
import "./App.css"

const App: React.FC = () => {
  const pageURL = createRelativeLink(config.pageURLPrefix, ':slug')
  const postURL = createRelativeLink(config.postURLPrefix, ':slug')
  return (
    <IonApp>
      <div className="SW-update-dialog"></div>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path={pageURL} component={Page} exact />
            <Route path={postURL} component={Post} exact />
            <Route path="/category/:name" component={Category} exact />
            <Route path="/" component={Home} />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
