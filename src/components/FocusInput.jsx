import {useEffect, useRef} from "react";

export const FocusInput = () => {
	const refInput = useRef();

	// console.log(refInput);

	const handleFocus = () => {
		// console.log(refInput)
		refInput.current.select();
	};

  useEffect(() => {
    if (refInput.current) {
      console.log(refInput.current);
      refInput.current.select();
    }
  }, []);
  
  

	return (
		<>
			<h1>FocusInput</h1>

			<hr />

			<input
				ref={refInput}
				type="text"
				placeholder="Ingrese su nomre"
				className="form-control mt-2"
      />
      

			<button className="btn btn-primary mt-3" onClick={handleFocus}>
				Focus
			</button>
		</>
	);
};
