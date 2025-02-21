import { FormEvent, useState } from "react";

export default function HomePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [author, setAuthor] = useState("");

  const savePost = (event: FormEvent) => {
    event.preventDefault();
    console.log(title, description, image, author);
  }

  return (
    <div>
      <h1>HomePage</h1>
      <form onSubmit={savePost}>
        <input
          type="text"
          placeholder="Titel"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Image" />
        <input type="text" placeholder="Author" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
