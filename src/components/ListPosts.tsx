import React, { CSSProperties } from 'react'
import moment from 'moment'
import { IonList, IonItem, IonLabel, IonSkeletonText, IonThumbnail } from '@ionic/react'
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
                        {post._embedded && post._embedded["wp:featuredmedia"] ? (
                            <IonThumbnail slot="start">
                                <img src={post._embedded["wp:featuredmedia"][0].source_url} alt="thumbnail"/>
                            </IonThumbnail>
                        ): (
                            <IonThumbnail slot="start">
                                <img src="/assets/icon/icon-152x152.png" alt="thumbnail" />
                            </IonThumbnail>)}
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