# 🏆 React Redux Beginning to Mastery 🏆
<img src="./redux.gif" width="100%" height="auto" />

## Topic Covered :-
### Package Name
- redux
- react-redux 

### 1 [ReactRedux Installation](#reactRedux-installation)
### 2 [Redux Actions](#redux-actions)
### 3 [Redux Constants](#redux-constant)
### 4 [Redux Reducers](#redux-reducers)
### 5 [Redux Root Reducers](#redux-root-reducers)
### 6 [Redux Store](#redux-store)
### 7 [Redux Provider](#redux-provider)
### 8 [Redux useSelector](#redux-useSelector)
### 9 [Redux mapDispatchToProps](#redux-mapDispatchToProps)
### 10 [Redux mapStateToProps](#redux-mapStateToProps)

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
## redux-Cconstant
  #### Why use constant  in react redux ?
  It allows you to easily find all usages of that constant across the project. It also prevents you from introducing silly bugs caused by typos -- in which case, you will get a ReferenceError immediately.


  ```javascript
  export const INCREMENT="INCREMENT";
  export const DECREMENT="DECREMENT";

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
## redux-root-reducers
 ### What is Root Reducer?
Redux uses a single root reducer function that accepts the current state (and an action) as input and returns a new state

The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore . The resulting reducer calls every child reducer, and gathers their results into a single state object.
```javascript
import { combineReducers } from "redux";
import CartItems from "./CartItems";

export default combineReducers({
CartItems
})
```
## redux-store

A store is an immutable object tree in Redux. A store is a state container which holds the application’s state. Redux can have only a single store in your application

```javascript
import {createStore} from "redux";
import rootReducers from "./reducers/index";

const store = createStore(rootReducers)
export default store;
```
Note: Redux store brings together state, actions and reducers that make up your app.
## redux-provider

#### What is the use of a provider ?

to provide the data of store to react application
```javascript
import store from "./store";
import {Provider} from "react-redux";

<Provider store={store}>
<App/>
</Provider>
```
## redux-useSelector
  #### What is useSelector() hook?
  The useSelector hook takes a function which receives as its first argument state, and then it allows you to return from that which part of the state that you want.

  ```javascript
  import {useSelector} from "react-redux";
  const count = useSelector((state)=>state.changeCount)
  ```
## redux-mapDispatchToProps
  #### What is mapDispatchToProps in redux?
mapDispatchToProps argument is responsible for enabling a component to dispatch actions.

  ```javascript
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (num) => dispatch(increment(num)),
    decrement: (num) => dispatch(decrement(num)),
  }
}
  ```
## redux-mapStateToProps
  #### What is mapStateToProps in redux?
mapStateToProps is used for selecting the part of the data from the store that the connected component needs. It&#39;s frequently referred to as just mapState for short. ... It receives the entire store state, and should return an object of data this component needs.
  ```javascript
const mapStateToProps=(state)=>{
return {count:state.changeCount}
}
  ```
