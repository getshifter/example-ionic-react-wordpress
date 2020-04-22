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
}
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