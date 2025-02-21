import { z } from "zod";

export const PostSchema = z.object({
  id: z.string(),
  title: z.string().min(3, "Title måste ha minst 3 karaktärer(s)").max(30),
  description: z.string().max(200).nonempty(),
  image: z.string().url(),
  author: z.string().min(2),
  createdAt: z.date(),
});

export const PostCreateSchema = PostSchema.omit({
  id: true,
  createdAt: true,
});

export type Post = z.infer<typeof PostSchema>;
export type PostCreate = z.infer<typeof PostCreateSchema>;

export const mockedPosts: Post[] = [
  {
    id: "1",
    title: "A",
    description: "lorem",
    image:
      "https://images.pexels.com/photos/30785015/pexels-photo-30785015/free-photo-of-vibrant-monk-parakeet-perched-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Mysan",
    createdAt: new Date("2025-02-19"),
  },
  {
    id: "2",
    title: "What is zod",
    description: "lorem lorem lorem",
    image:
      "https://images.pexels.com/photos/30785015/pexels-photo-30785015/free-photo-of-vibrant-monk-parakeet-perched-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Mysan the one",
    createdAt: new Date("2025-02-17"),
  },
];
