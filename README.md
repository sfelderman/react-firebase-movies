## Built On
- ### React
- ### Firebase
- ### [The Movie DB](https://www.themoviedb.org)

---

## Ideas

### Added
- Toggle Watched
  - Each Movie has a button/indicator showing weather it has been watched before or not
- Simple filtering should be `All`, `Watched`, `Unwatched` -  defaults to `All`
- Search
  - searching for a movie - could be combined with tags
  - If not found in the library use external search
- Authentication
- Don't allow rewrite
- Remove all data from Anon users after logout - uses cloud function hook


### To Be Added
- Show reference and source
- Import/Export
- Tags
  - Each movie can be tagged with a custom user defined tag. A watched tag is a simple version of this.
- Filters
  - Allow filtering on different tags
    - prefix with a # for tag search
    - could also include custom filters on combos of tags
- Recommendations
- Make splash screen that does Authentication in background (currently spinner)
- Algolia search
- Make a demo account
- Send verification email
- Convert to a logged in version
- Leave reviews and comments on movies
- Edit user info (name, etc.)
