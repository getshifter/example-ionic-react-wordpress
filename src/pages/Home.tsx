import React, { useState, useEffect, useCallback } from 'react'
import { RefresherEventDetail } from '@ionic/core';
import Layout from '../components/Layouts'
import config from '../config'
import ListPost from '../components/ListPosts'
import {
    WPPost
} from '../wp.interface'
import { IonRefresher, IonRefresherContent } from '@ionic/react'

const Home: React.FC = () => {
    const [posts, setPosts] = useState<WPPost[]>([])
    useEffect(() => {
        config.wpClient.posts().perPage(30).then(data => {
            setPosts(data)
        })
    }, [])
    const handleRefresh = useCallback((event: CustomEvent<RefresherEventDetail>) => {
        config.wpClient.posts().perPage(30).then(data => {
            setPosts(data)
        }).finally(() => {
            event.detail.complete()
        })
    }, [])
    return (
        <Layout name="Home">
            <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                <IonRefresherContent />
            </IonRefresher>
            <ListPost posts={posts} />
        </Layout>
    )
}

export default Home