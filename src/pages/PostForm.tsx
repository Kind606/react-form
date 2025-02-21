import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Post, PostCreate, PostCreateSchema } from "../data";
import TextInput from "./TextInput";

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
      <TextInput
        placeholder="Title"
        error={Boolean(formState.errors.title)}
        helperText={formState.errors.title?.message}
        registerProps={register("title")}
      />
      <TextInput
        placeholder="Description"
        error={Boolean(formState.errors.description)}
        helperText={formState.errors.description?.message}
        registerProps={register("description")}
      />
      <TextInput
        placeholder="Image"
        error={Boolean(formState.errors.image)}
        helperText={formState.errors.image?.message}
        registerProps={register("image")}
      />
      <TextInput
        placeholder="Author"
        error={Boolean(formState.errors.author)}
        helperText={formState.errors.author?.message}
        registerProps={register("author")}
      />
      
      <button
        type="submit"
        className=" border-3 border-green-500 rounded px-2 py-1 cursor-pointer mt-2 text-white bg-green-400 hover:bg-green-500"
      >
        Save
      </button>
    </form>
  );
}
