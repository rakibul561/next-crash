import getAllPosts from "@/lib/getAllPosts";

const  Posts = async  ()  => {
    const posts = await getAllPosts();
    console.log(posts);
    

    return (
        <div className="mt-6">
                <h1>All post</h1>
                
        </div>
    );
};

export default Posts;
