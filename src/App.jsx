import { createStore } from "solid-js/store";
import { createMemo, createSignal } from "solid-js";
import MovieEntry from "./MovieEntry";
import AddMovieForm from "./AddMovieForm";

export default function App() {
  const [movies, setMovies] = createStore([]);

  const [sortMode, setSortMode] = createSignal(null);

  const deleteMovie = (index) => {
    setMovies((movies) => movies.filter((_, i) => i !== index()));
  };

  const sortedMovies = createMemo(() => {
    const mode = sortMode();
    if (mode === "alfa") {
      return movies.toSorted((a, b) => a.title.localeCompare(b.title));
    } else if (mode === "rating") {
      return movies.toSorted((a, b) => b.rating - a.rating);
    } else {
      return movies;
    }
  });

  const toggleSortMode = (targetMode) => {
    setSortMode((mode) => (mode === targetMode ? null : targetMode));
  };

  return (
    <>
      <h1>Min filmlista</h1>

      <AddMovieForm
        onSubmit={(movie) => setMovies((movies) => [...movies, movie])}
      />

      <hr />

      <h2>Filmer</h2>

      <div class="d-flex gap-2">
        <button
          class={
            "btn " + (sortMode() === "alfa" ? "btn-primary" : "btn-secondary")
          }
          onClick={[toggleSortMode, "alfa"]}
        >
          Alfabetisk ordning
        </button>
        <button
          class={
            "btn " + (sortMode() === "rating" ? "btn-primary" : "btn-secondary")
          }
          onClick={[toggleSortMode, "rating"]}
        >
          Betygsordning
        </button>
      </div>

      <ul id="movies">
        <For each={sortedMovies()}>
          {(movie, index) => (
            <MovieEntry {...movie} onDelete={[deleteMovie, index]} />
          )}
        </For>
      </ul>
    </>
  );
}
