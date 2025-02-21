import { useForm } from "react-hook-form";
import { Post } from "./data";

export default function HomePage() {
  const { register, handleSubmit } = useForm<Post>();

  const savePost = (post: Post) => {
    console.log(post)
  };

  return (
    <div>
      <h1>HomePage</h1>
      <form onSubmit={handleSubmit(savePost)}>
        <input type="text" placeholder="Titel" {...register("title")} />
        <input
          type="text"
          placeholder="Description"
          {...register("description")}
        />
        <input type="text" placeholder="Image" {...register("image")} />
        <input type="text" placeholder="Author" {...register("author")} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
