import { For } from "solid-js";

const starImage = "https://images.soulant.com/star.webp";
const deleteImage = "https://images.soulant.com/delete-shutterstock.webp";

export default function MovieEntry(props) {
  return (
    <li>
      {props.title}
      <img
        src={deleteImage}
        alt="A delete button plagerized from shutterstock"
        class="delete-movie-icon"
        onClick={props.onDelete}
      />
      <For each={Array(props.rating).fill(null)}>
        {() => <img src={starImage} alt="star" />}
      </For>
    </li>
  );
}
