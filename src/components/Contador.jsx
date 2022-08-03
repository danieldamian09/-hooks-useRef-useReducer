import React, {useReducer} from "react";

const initialState = { count: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return {
        count: state.count + 1
      }
    
      case "DECREMENTAR":
        return {
          count: state.count - 1
        }
  
    default:
      break;
  }
}


export const Contador = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state);

  const sumar = () => {
    dispatch({type:"INCREMENTAR"})
  }

  const restar = () => {
    dispatch({type: "DECREMENTAR"})
  }

	return (
		<>
			<p>Count: {state.count}</p>
			<div>
				<button
					className="btn btn-primary button"
					onClick={restar}
				>
					-
				</button>
				<button
					className="btn btn-primary button"
					onClick={sumar}
				>
					+
				</button>
			</div>
		</>
	);
};
