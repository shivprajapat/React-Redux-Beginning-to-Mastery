# 🏆 React Redux Beginning to Mastery 🏆
## Topic Covered :-

### Package Name
- redux
- react-redux 

### 1 [ReactRedux Installation](#reactRedux-installation)
### 2 [Redux Actions](#redux-actions)
### 3 [Redux Reducers](#redux-reducers)

## reactRedux-installation
Redux is a predictable state container for javascript application

```javascript
<button onClick={()=> increment()}></button>
{count}
<button onClick={()=> decrement()}></button>
```
Project Step Up : 	

- npx create-react-app project-name
- cd project-name
- npm start
- npm install redux 
- npm install react-redux


## redux-actions

are javascript objects that have a type field and payload and it uses for What to Do.

```javascript
import  {INCREMENT,DECREMENT} from "../constants";

export const increment =()=>{
return {type : INCREMENT};
}

export const decrement =()=>{
return {type : DECREMENT};
}
```

## redux-reducers

are functions that take the current state and an action as arguments and return a new state as a result.

```javascript
import { DECEREMENT, INCREMENT } from "../constants";

const initialState = 0;

const changeCount = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECEREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default changeCount;
```