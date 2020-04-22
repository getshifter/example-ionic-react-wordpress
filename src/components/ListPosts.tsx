import React from 'react'
import moment from 'moment'
import { IonList, IonItem, IonLabel, IonSkeletonText } from '@ionic/react'

import {
    WPPost
    } from '../wp.interface'

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
            {posts.map(post => (
                <IonItem key={post.id} routerLink={`/pages/${post.slug}`}>
                    <IonLabel>
                        <h3 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                        <p>
                            Published: {moment(post.date).format('MMMM Do YYYY')}<br/>
                            Modified: {moment(post.modified).format('MMMM Do YYYY')}
                        </p>
                    </IonLabel>
                </IonItem>
            ))}
        </IonList>
    )
}
export default ListPost