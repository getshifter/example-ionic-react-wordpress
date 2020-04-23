import React from 'react';
import { WPPost } from '../wp.interface';
import { IonSkeletonText, IonItem, IonLabel } from '@ionic/react';

const Single: React.FC<{
    post?: WPPost;
    loading?: boolean;
}> = ({post,loading}) => {
  if (loading || !post) {
    return (
        <IonItem>
          <IonLabel>
            <p>
              <IonSkeletonText animated /><br />
              <IonSkeletonText animated /><br />
              <IonSkeletonText animated /><br />
              <IonSkeletonText animated /><br />
            </p>
          </IonLabel>
        </IonItem>
    )
  }
  return (
    <IonItem>
        <section className="ion-padding ion-margin-top">
            <IonLabel>
                <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
            </IonLabel>
            <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
        </section>
    </IonItem>
  );
};

export default Single;
