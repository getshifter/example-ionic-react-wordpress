import React, { CSSProperties } from 'react'
import moment from 'moment'
import { IonList, IonItem, IonLabel, IonSkeletonText } from '@ionic/react'

import {
    WPPost
    } from '../wp.interface'
import config from '../config'
import { createRelativeLink } from '../helpers/url'

const TitleStyle: CSSProperties = {
    fontSize: '1.5rem'
}

const ListPost: React.FC<{
    posts: WPPost[]
    loading?: boolean;
}> = ({posts, loading}) => {
    if (loading || (!posts || posts.length < 1)) {
        return (
            <IonList>
                <IonItem>
                    <IonLabel>
                        <h3><IonSkeletonText animated /></h3>
                        <p><IonSkeletonText animated /></p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <h3><IonSkeletonText animated /></h3>
                        <p><IonSkeletonText animated /></p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <h3><IonSkeletonText animated /></h3>
                        <p><IonSkeletonText animated /></p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <h3><IonSkeletonText animated /></h3>
                        <p><IonSkeletonText animated /></p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <h3><IonSkeletonText animated /></h3>
                        <p><IonSkeletonText animated /></p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>
                        <h3><IonSkeletonText animated /></h3>
                        <p><IonSkeletonText animated /></p>
                    </IonLabel>
                </IonItem>
            </IonList>
        )
    }
    return (
        <IonList>
            {posts.map(post => {
                const link = createRelativeLink(config.postURLPrefix, post.slug)
                return (
                    <IonItem key={post.id} routerLink={link}>
                    <section>
                    <h3 dangerouslySetInnerHTML={{__html: post.title.rendered}} style={TitleStyle} />
                    <IonLabel>
                        Published: {moment(post.date).format('MMMM Do YYYY')}<br/>
                        Modified: {moment(post.modified).format('MMMM Do YYYY')}
                    </IonLabel>
                    <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                    </section>
                    </IonItem>
                    )
                }
            )}
        </IonList>
    )
}
export default ListPost