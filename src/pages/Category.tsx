import React, { useState, useEffect } from 'react'
import Layout from '../components/Layouts'
import config from '../config'
import ListPost from '../components/ListPosts'
import {
    WPPost
} from '../wp.interface'
import { useParams } from 'react-router'

const Category: React.FC = () => {
    const {name} = useParams<{ name: string; }>();
    const [loading, isLoading] = useState(false)
    const [posts, setPosts] = useState<WPPost[]>([])
    useEffect(() => {
        isLoading(true)
        config.wpClient.categories().slug(name).then(cat => {
            const target = cat[0]
            return config.wpClient.posts().perPage(50)
                .categories(target.id)
        }).then(data => {
            isLoading(false)
            setPosts(data)
        })
    }, [name])
    return (
        <Layout>
            <ListPost posts={posts} loading={loading} />
        </Layout>
    )
}

export default Category