const API_URL = "http://localhost:5000/mood";

export const getMovieFromMood = async (mood) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mood }),
  });

  const data = await res.json();
  return data.movie;
};