import React, { CSSProperties } from 'react'
import config from '../config'
import {WPPosts} from '../wp.interface'
import { IonCard, IonCardTitle, IonCardHeader, IonGrid, IonRow, IonCol, IonCardContent } from '@ionic/react'
import { createRelativeLink } from '../helpers/url'

const RelatedPosts: React.FC<{
    title?: string;
    posts?: WPPosts;
    style?: CSSProperties;
}> = ({posts, title, style}) => {
    if (!posts) return null;
    return (
        <>
        <IonGrid style={style}>
            {title ? <h2 className="ion-padding-start">{title}</h2>: null}
            <IonRow className="ion-align-items-stretch">
                {posts.length > 0 ?
                posts.map(p => {
                    return (
                        <IonCol key={p.id}>
                            <IonCard routerLink={createRelativeLink(config.postURLPrefix, p.slug)} style={{height: '100%'}}>
                                {p._embedded && p._embedded["wp:featuredmedia"] ? (
                                    <img src={p._embedded["wp:featuredmedia"][0].source_url} alt="thumbnail" />
                                ): null}
                                <IonCardHeader>
                                    <IonCardTitle>{p.title.rendered}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <div dangerouslySetInnerHTML={{__html: p.excerpt.rendered}} />
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    )
                }): <p className="ion-padding-start">No posts</p>}
            </IonRow>
        </IonGrid>
        </>
    )
}

export default RelatedPosts