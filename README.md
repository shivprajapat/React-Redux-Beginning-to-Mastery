# 🏆 React Redux Beginning to Mastery 🏆
## Topic Covered :-

### Package Name
- redux
- react-redux 

### 1 [ReactRedux Installation](#reactRedux-installation)
### 2 [Redux Actions](#redux-actions)

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