import { useState } from "react";
import { getMovieFromMood } from "../services/ai";

function MoodMatcher({ onMovieFound }) {
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMood = async () => {
    if (!mood) return;

    setLoading(true);

    try {
      const movie = await getMovieFromMood(mood);
      onMovieFound(movie);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Tell your mood..."
        value={mood}
        onChange={(e) => setMood(e.target.value)}
      />

      <button onClick={handleMood}>
        {loading ? "Finding..." : "Match Movie"}
      </button>
    </div>
  );
}

export default MoodMatcher;