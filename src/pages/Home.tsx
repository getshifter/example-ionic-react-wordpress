import React, { useState, useEffect, useCallback } from 'react'
import { RefresherEventDetail } from '@ionic/core';
import Layout from '../components/Layouts'
import config from '../config'
import ListPost from '../components/ListPosts'
import {
    WPPost
} from '../wp.interface'
import { IonRefresher, IonRefresherContent } from '@ionic/react'
import CardPosts from '../components/CardPosts';

const Home: React.FC = () => {
    const [stickyPosts, setStickyPosts] = useState<WPPost[]>([])
    const [posts, setPosts] = useState<WPPost[]>([])
    useEffect(() => {
        config.wpClient.posts().perPage(3).param({sticky: "true"}).embed().then(data => {
            setStickyPosts(data)
        })
        config.wpClient.posts().perPage(30).embed().then(data => {
            setPosts(data)
        })
    }, [])
    const handleRefresh = useCallback((event: CustomEvent<RefresherEventDetail>) => {
        config.wpClient.posts().perPage(30).embed().then(data => {
            setPosts(data)
        }).finally(() => {
            event.detail.complete()
        })
    }, [])
    return (
        <Layout>
            <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                <IonRefresherContent />
            </IonRefresher>
            <CardPosts
                posts={stickyPosts.length > 0 ? stickyPosts: undefined}
                style={{
                    backgroundColor: '#ddd',
                    paddingBottom: '25px',
                    paddingTop: '25px',
                }}
            />
            <ListPost posts={posts} />
        </Layout>
    )
}

export default Home