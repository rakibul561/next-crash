import getPosts from '@/lib/getPosts';
import React from 'react';


async function generateMetadata({ params }) {
    const { id } = params;
    const post = await getPosts(id);
    

    return {
        title:post.title,
        description:post.body
    }

}



const PostsPage = async ({ params }) => {
    const { id } = params;
    const post = await getPosts(id);



    return (
        <div className='mt-6'>
            <h2 className='text-blue-500'>{post.title}</h2>
            <p className='mt-3'>{post.body}</p>
        </div>
    );
};

export default PostsPage;
