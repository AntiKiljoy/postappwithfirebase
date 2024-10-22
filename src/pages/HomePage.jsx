import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();

    async function fetchPosts() {
      const url =
        "https://react-user-crud-app-1cfaa-default-rtdb.europe-west1.firebasedatabase.app/posts.json";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const postsArray = Object.keys(data).map((postId) => ({
        id: postId,
        ...data[postId],
      }));
      console.log(postsArray);
      setPosts(postsArray);
    }

    fetchPosts();
  }, []);
  return (
    <section className="page">
      <div className="grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
