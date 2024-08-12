import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);
  const handleAddTag = (newTag) => {
    //console.log(tag);
    setTags([...tags, [...newTag]]);
  };
  const handleDeleteTag = (tagToDelete) => {
    //console.log(tagToDelete);
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };
  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
