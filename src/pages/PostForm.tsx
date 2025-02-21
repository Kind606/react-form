import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Post, PostCreate, PostCreateSchema } from "../data";

interface Props {
  onSubmit: (post: Post) => void;
}

export default function PostForm(props: Props) {
  const { register, handleSubmit, formState, reset } = useForm<PostCreate>({
    resolver: zodResolver(PostCreateSchema),
  });

  const savePost = (post: PostCreate) => {
    console.log(post);
    props.onSubmit({
      id: Date.now().toString(),
      createdAt: new Date(),
      ...post,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(savePost)} className="p-2 bg-slate-100 grid">
      <h2 className="text-xl">Create a new Post</h2>
      <input
        className="px-2 py-1 border rounded mt-2 bg-slate-50"
        type="text"
        placeholder="Titel"
        {...register("title")}
      />
      {formState.errors.title && (
        <p className="text-red-600">{formState.errors.title.message}</p>
      )}
      <input
        className="px-2 py-1 border rounded mt-2 bg-slate-50"
        type="text"
        placeholder="Description"
        {...register("description")}
      />
      {formState.errors.description && (
        <p className="text-red-600">{formState.errors.description.message}</p>
      )}
      <input
        className="px-2 py-1 border rounded mt-2 bg-slate-50"
        type="text"
        placeholder="Image"
        {...register("image")}
      />
      {formState.errors.image && (
        <p className="text-red-600">{formState.errors.image.message}</p>
      )}
      <input
        className="px-2 py-1 border rounded mt-2 bg-slate-50"
        type="text"
        placeholder="Author"
        {...register("author")}
      />
      {formState.errors.author && (
        <p className="text-red-600">{formState.errors.author.message}</p>
      )}
      <button
        type="submit"
        className=" border-3 border-green-500 rounded px-2 py-1 cursor-pointer mt-2 text-white bg-green-400 hover:bg-green-500"
      >
        Save
      </button>
    </form>
  );
}
