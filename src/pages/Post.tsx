import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Layout from '../components/Layouts'
import config from '../config';
import { WPPost } from '../wp.interface';
import { useLoading } from '../helpers/hooks';
import { IonSkeletonText, IonItem, IonLabel } from '@ionic/react';

const Post: React.FC = () => {
    const {
        loading, isLoading
    } = useLoading()
    const [post, setPost] = useState<WPPost | null>(null)
  const { slug } = useParams<{ slug: string; }>();
    useEffect(() => {
        isLoading(true)
        config.wpClient.posts().slug(slug)
            .then(data => {
                isLoading(false)
                setPost(data[0])
            })
    }, [slug])
  if (loading || !post) {
    return (
      <Layout name="Loading...">
        <IonItem>
          <IonLabel>
            <p>
              <IonSkeletonText animated /><br />
              <IonSkeletonText animated /><br />
              <IonSkeletonText animated /><br />
              <IonSkeletonText animated /><br />
            </p>
          </IonLabel>
        </IonItem>
      </Layout>
    )
  }
  return (
    <Layout name={post.title.rendered}>
        <IonItem>
          <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
      </IonItem>
      </Layout>
  );
};

export default Post;
