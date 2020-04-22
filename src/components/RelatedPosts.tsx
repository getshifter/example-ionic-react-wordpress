import React, { useState, useEffect } from 'react'
import config from '../config'
import {
    WPPost, WPPosts
} from '../wp.interface'
import { IonCard, IonCardTitle, IonCardHeader, IonGrid, IonRow, IonCol, IonCardContent, IonItem } from '@ionic/react'
import { createRelativeLink } from '../helpers/url'

const RelatedPosts: React.FC<{
    target: 'category' | 'tags';
    post?: WPPost
}> = ({post, target}) => {
    const [posts, setPosts] = useState<WPPosts>([])
    useEffect(() => {
        if (!post) return
        const client = config.wpClient.posts()
        if (target === 'category') {
            client.categories(post.categories)
        } else {
            client.tags(post.tags)
        }
        client.perPage(4).then((data: WPPosts) => {
            setPosts(data.filter(d => d.id !== post.id))
        })
    }, [post, target])
    if (!post) return null;
    return (
        <IonGrid>
            <h2>Related {target} Posts</h2>
            <IonRow>
                {posts.length > 0 ?
                posts.map(p => {
                    return (
                        <IonCol key={p.id}>
                            <IonItem routerLink={createRelativeLink(config.postURLPrefix, p.slug)}>
                                <IonCard>
                                    <IonCardHeader>
                                        <IonCardTitle>{p.title.rendered}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <div dangerouslySetInnerHTML={{__html: p.excerpt.rendered}} />
                                    </IonCardContent>
                                </IonCard>
                            </IonItem>
                        </IonCol>
                    )
                }): <p>No posts</p>}
            </IonRow>
        </IonGrid>
    )
}

export default RelatedPosts