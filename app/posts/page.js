import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

const Posts = async () => {
    const posts = await getAllPosts();
    console.log(posts);


    return (
        <div className="mt-6">
            <h1>All post</h1>


            <ul className="mt-6">
                {
                    posts?.map(post => <li key={post.id}>
                       
                         <Link href={`/posts/${post.id}`}>  {post.title}</Link>
                    </li>)
                }
            </ul>

        </div>
    );
};

export default Posts;
