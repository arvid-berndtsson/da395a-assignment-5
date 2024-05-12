import { createSignal } from "solid-js";

export default function AddMovieForm(props) {
  const [title, setTitle] = createSignal("");
  const [rating, setRating] = createSignal("0");

  return (
    <form
      id="add-movie-form"
      onSubmit={(e) => {
        e.preventDefault();

        if (title() === "") {
          alert("Husk at indtaste et filmnavn");
          return;
        }

        if (rating() === "0") {
          alert("Husk at indtaste en rating");
          return;
        }

        props.onSubmit({ title: title(), rating: parseInt(rating()) });

        setTitle("");
        setRating("0");
      }}
    >
      <fieldset>
        <legend>Lägg till en film</legend>

        <label for="title-field">Titel:</label>
        <input
          type="text"
          value={title()}
          onInput={(e) => setTitle(e.currentTarget.value)}
          class="form-control"
        />

        <label for="rating-field">Betyg:</label>

        <select
          type="text"
          value={rating()}
          onChange={(e) => setRating(e.currentTarget.value)}
          class="form-control"
        >
          <option value="0">Välj betyg här...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input type="submit" class="btn btn-success mt-3" value="Spara film" />
      </fieldset>
    </form>
  );
}
