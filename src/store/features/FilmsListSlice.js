const initialState = [
  { id: 1, name: "Queen GamBit", type: "education", origin: "US-UK", rank: 5 },
];
function nextTodoId(films) {
  const maxId = films.reduce((maxId, film) => Math.max(film.id, maxId), -1);
  return maxId + 1;
}

export default function filmsListReducer(state = initialState, action) {
  switch (action.type) {
    case "films/filmAdded": {
      return [
        ...state,
        {
          id: nextTodoId(state),
          name: action.payload.name,
          type: action.payload.type || "education",
          origin: action.payload.origin || "US-UK",
          rank: action.payload.rank || 0,
        },
      ];
    }
    default:
      return state;
  }
}
