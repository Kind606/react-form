import { useForm } from "react-hook-form";
import { Post } from "./data";

export default function HomePage() {
  const { register, handleSubmit } = useForm<Post>();

  const savePost = (post: Post) => {
    console.log(post);
  };

  return (
    <div>
      <h1>HomePage</h1>
      <form
        onSubmit={handleSubmit(savePost)}
        className="p-2 bg-slate-100 grid gap-2"
      >
        <h2 className="text-xl">Create a new Post</h2>
        <input
          className="px-2 py-1 border rounded bg-slate-50"
          type="text"
          placeholder="Titel"
          {...register("title")}
        />
        <input
          className="px-2 py-1 border rounded bg-slate-50"
          type="text"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="px-2 py-1 border rounded bg-slate-50"
          type="text"
          placeholder="Image"
          {...register("image")}
        />
        <input
          className="px-2 py-1 border rounded bg-slate-50"
          type="text"
          placeholder="Author"
          {...register("author")}
        />
        <button
          type="submit"
          className=" rounded px-2 py-1 cursor-pointer hover:bg-slate-200"
        >
          Save
        </button>
      </form>
    </div>
  );
}
