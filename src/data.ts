export interface Post {
  id: string;
  titel: string;
  description: string;
  image: string;
  author: string;
  createdAt: Date;
}

export const mockedPosts: Post[] = [
  {
    id: "1",
    titel: "A",
    description: "lorem",
    image:
      "https://images.pexels.com/photos/30785015/pexels-photo-30785015/free-photo-of-vibrant-monk-parakeet-perched-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Mysan",
    createdAt: new Date("2025-02-19"),
  },
  {
    id: "2",
    titel: "What is zod",
    description: "lorem lorem lorem",
    image:
      "https://images.pexels.com/photos/30785015/pexels-photo-30785015/free-photo-of-vibrant-monk-parakeet-perched-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Mysan the one",
    createdAt: new Date("2025-02-17"),
  },
];
