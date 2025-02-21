import { Post } from "../data";
import PostForm from "./PostForm";

export default function HomePage() {
  const savePost = (post: Post) => {
    console.log(post);
  };

  return (
    <div>
      <h1>HomePage</h1>
      <PostForm onSubmit={savePost}/>
    </div>
  );
}
