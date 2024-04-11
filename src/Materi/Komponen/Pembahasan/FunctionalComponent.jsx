import { useState }  from "react";

const FunctionalComponent = ({nama}) => {
   
    const [value, setValue] = useState (0);

    const handlePlus = () => {
         setValue(value + 1);
    }

    const handleMinus = () => {
        if(value > 0) {
            setValue(value - 1);
        }
    }
   
    
   
    return (
        <div>
            <h1>Functional Component {nama}</h1>
            <p>This is a functional component</p>
            <h2>This is the value</h2>
            <button onClick={handleMinus}>+</button>
            <span>{' '} {value} {' '}</span>
            <button onClick={handlePlus}>+</button>

        </div>
    )
}

FunctionalComponent.defaultProps = {
    nama: 'default'
}


export default FunctionalComponent;