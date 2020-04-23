import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Layout from '../components/Layouts'
import Single from '../components/Single';
import { WPPost } from '../wp.interface';
import { useLoading } from '../helpers/hooks';
import config from '../config';

const Page: React.FC = () => {
  
  const {
      loading, isLoading
  } = useLoading()
  const [post, setPost] = useState<WPPost | undefined>(undefined)
const { slug } = useParams<{ slug: string; }>();
  useEffect(() => {
      isLoading(true)
      config.wpClient.pages().slug(slug)
          .then(data => {
              isLoading(false)
              setPost(data[0])
          })
  }, [slug, isLoading])
  
  return (
    <Layout>
      <Single post={post} loading={loading} />
    </Layout>
  );
};

export default Page;
