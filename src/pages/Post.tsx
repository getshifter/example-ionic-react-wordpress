import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Layout from '../components/Layouts'
import config from '../config';
import { WPPost } from '../wp.interface';
import { useLoading } from '../helpers/hooks';
import Single from '../components/Single';
import RelatedPosts from '../components/RelatedPosts';

const Post: React.FC = () => {
    const {
        loading, isLoading
    } = useLoading()
    const [post, setPost] = useState<WPPost | undefined>(undefined)
  const { slug } = useParams<{ slug: string; }>();
    useEffect(() => {
        isLoading(true)
        config.wpClient.posts().slug(slug)
            .then(data => {
                isLoading(false)
                setPost(data[0])
            })
    }, [slug, isLoading])
  return (
    <Layout>
      <Single post={post} loading={loading} />
      <RelatedPosts target="category" post={post} />
      <RelatedPosts target="tags" post={post} />
    </Layout>
  )
};

export default Post;
