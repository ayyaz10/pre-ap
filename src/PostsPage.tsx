import { useState, useEffect } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonRes = await res.json();
    setPosts(jsonRes);
    console.log(jsonRes);
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <section>
      <div>PostsPage</div>
      <button onClick={getPosts}>Click Me!</button>
      {posts.map((postItem) => {
        return (
          <div key={postItem.id} className="my-10">
            <h2 className="text-lg font-bold">{postItem.title}</h2>
            <p>{postItem.body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default PostsPage;
