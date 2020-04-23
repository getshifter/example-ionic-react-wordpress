export type WPPost = {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    }
    modified: string;
    modified_gmt: string;
    slug: string;
    title: {
        rendered: string;
    }
    excerpt: {
        rendered: string;
    }
    content: {
        rendered: string;
    }
    categories: number[];
    tags: number[]
    _embedded?: WPPostEmbedded;
  };
  export type WPPostEmbedded = {
    author: [
      {
        id: string;
        name: string;
        url: string;
        avatar_urls: {
          24: string;
          48: string;
          96: string;
        };
        description: string;
        link: string;
        slug: string;
      }
    ];
    "wp:featuredmedia"?: {
        alt_text: string;
        author: number;
        caption: {rendered: string;}
        date: string;
        id: number;
        link: string;
        media_details: {
            width: number;
            height: number;
            file: string;
            sizes: {
                full:{
                    file: string;
                    height: number;
                    mime_type: string;
                    source_url: string;
                    width: number;
                }
                large:{
                    file: string;
                    height: number;
                    mime_type: string;
                    source_url: string;
                    width: number;
                }
                medium:{
                    file: string;
                    height: number;
                    mime_type: string;
                    source_url: string;
                    width: number;
                }
                medium_large:{
                    file: string;
                    height: number;
                    mime_type: string;
                    source_url: string;
                    width: number;
                }
                thumbnail:{
                    file: string;
                    height: number;
                    mime_type: string;
                    source_url: string;
                    width: number;
                }
            }
            image_meta: unknown
        }
        media_type: string;
        mime_type: string;
        slug: string;
        source_url: string;
        title: {rendered: string;}
        type: string;
    }[],
    "wp:term": [
      [
        {
          id: string;
          link: string;
          name: string;
          slug: string;
          taxonomy: string;
        }
      ]
    ];
  };
export type WPPosts = Array<WPPost>

export type WPCategory = {
    count: number;
    description: string;
    id: number;
    link: string;
    meta: unknown[];
    name: string;
    parent: number;
    slug: string;
    taxonomy: string;
}
export type WPCategories = Array<WPCategory>