const initialState = {
  categories: [
    { name: 'electronics', 
      displayName: 'Elecronics',
      description: ""
     },
    { name: 'food',
     displayName: 'Food',
     description: "" 
     } 
  ],
  activeCategory: '',
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case 'change':
    return { categories: state.categories, activeCategory: payload };
  default:
    return state;
  }
};

export const changeActiveCategory = category => {
  return {
    type: 'change',
    payload: category,
  };
};