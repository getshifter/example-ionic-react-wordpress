import React, { Fragment } from 'react';
import { WPPost } from '../wp.interface';
import { IonSkeletonText, IonItem, IonLabel, IonBadge } from '@ionic/react';

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
                {post._embedded && post._embedded["wp:term"] ? (
                  <Fragment>
                    <p>Categories:</p>
                    {post._embedded["wp:term"].map(terms => {
                      if (!terms || terms.length < 1) return null;
                      return (
                        <Fragment key={`cat-${terms[0].id}`}>
                          {terms.map(term => {
                            if (term.taxonomy !== "category") return null;
                            return (
                              <IonBadge key={`category-${term.id}`} style={{marginRight: 5}}>{term.name}</IonBadge>
                            )
                          })}
                        </Fragment>
                      )
                    })}
                    <p>Tags:</p>
                    {post._embedded["wp:term"].map(terms => {
                      if (!terms || terms.length < 1) return null;
                      return (
                        <Fragment key={`tag-${terms[0].id}`}>
                          {terms.map(term => {
                            if (term.taxonomy !== "post_tag") return null;
                            return (
                              <IonBadge key={`post-tag-${term.id}`} style={{marginRight: 5}}>{term.name}</IonBadge>
                            )
                          })}
                        </Fragment>
                      )
                    })}
                  </Fragment>
                ): null}
        </section>
    </IonItem>
  );
};

export default Single;
