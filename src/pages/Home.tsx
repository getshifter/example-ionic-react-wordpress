import React, { useState, useEffect } from 'react'
import Layout from '../components/Layouts'
import config from '../config'
import ListPost from '../components/ListPosts'
import {
    WPPost
} from '../wp.interface'

const Home: React.FC = () => {
    const [posts, setPosts] = useState<WPPost[]>([])
    useEffect(() => {
        config.wpClient.posts().perPage(30).then(data => {
            setPosts(data)
        })
    }, [])
    return (
        <Layout name="Home">
            <ListPost posts={posts} />
        </Layout>
    )
}

export default Home