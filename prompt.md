This document records the main AI prompts used during the development of the **Cine-Stream** project.
AI tools were used mainly for **debugging, problem solving and understanding implementation strategies**, not just code generation.

# 1. Implementing Movie Search with TMDB API

### Problem

While building the search feature, I needed to connect the **TMDB API** with the React frontend so that users could search for movies dynamically.

### Prompt Used

How can I implement a movie search feature in React using the TMDB API where the user types a movie name and results appear dynamically?

### Outcome

Using this prompt, I learned:

* How to call TMDB search API
* How to pass query parameters
* How to handle API responses
* How to update React state based on search results

This helped implement the **search input box functionality** in the application.

# 2. Implementing Debounced Search

### Problem

When typing in the search input box, the application was making too many API calls which could slow down the app.

### Prompt Used

How can I implement debouncing in React so that the API request only triggers after the user stops typing for a short time?

### Outcome

I implemented a **custom React hook (`useDebounce`)** that delays the API call by 500ms after the user stops typing.

This improved:

* Performance
* Reduced unnecessary API requests

# 3. Implementing Infinite Scroll

### Problem

Instead of using traditional pagination, the requirement was to automatically load more movies when the user scrolls to the bottom.

### Prompt Used

How can I implement infinite scroll in React to automatically fetch the next page of results when the user reaches the bottom of the page?

### Outcome

Using this guidance, I implemented:

* Scroll event listener
* Page state increment
* Appending new movie results to the grid

This enabled **smooth infinite scrolling for movie discovery**.
# 4. Integrating AI Mood Matcher

### Problem

The project required an **AI feature** where users type their mood and the system suggests a movie title.

### Prompt Used

How can I send a user mood prompt to the Gemini API and receive a movie recommendation that can then be searched in the TMDB API?

### Outcome

This helped design the logic:

User Mood → Gemini API → Movie Title → TMDB Search → Display Movie

This created the **Mood Matcher AI feature**.
# 5. Debugging Gemini API Issues

### Problem

While integrating Gemini API, several issues occurred:

* Invalid API key errors
* Incorrect API endpoint usage
* Response parsing errors
* AI repeatedly suggesting the same movie

### Prompt Used

Why does the Gemini API keep returning the same movie suggestion for different prompts and how can the response parsing be improved?

### Outcome

This helped me:

* Understand Gemini API request structure
* Parse the AI response correctly
* Improve prompt instructions sent to the AI

# 6. Handling Favorites with LocalStorage

### Problem

Users needed the ability to save movies to a **Favorites list** and view them later.

### Prompt Used

How can I store and retrieve movie objects in LocalStorage using React?

### Outcome

This helped implement:

* Saving movies to LocalStorage
* Preventing duplicate entries
* Creating a separate Favorites page
# 7. Lazy Loading Images

### Problem

Loading many movie posters at once could slow down the application.

### Prompt Used

How can I implement native lazy loading for images in React to improve performance?

### Outcome

Implemented:

```html
<img loading="lazy" />
```
This ensures images load only when they enter the viewport.

# Conclusion

During this project, AI tools were used mainly for:

* Debugging API integration issues
* Understanding implementation patterns
* Optimizing performance
* Solving real development problems
