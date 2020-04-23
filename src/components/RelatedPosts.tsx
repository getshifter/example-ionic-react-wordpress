import React, { useState, useEffect } from 'react'
import config from '../config'
import {
    WPPost, WPPosts
} from '../wp.interface'
import CardPosts from './CardPosts';


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
        <CardPosts title={`Related ${target} Posts`} posts={posts} />
    )
}

export default RelatedPosts