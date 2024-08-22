import { ReactNode } from "react";

// Button será uma arrow function, contendo disabled, children, onClick como props
const Button = ({disabled, children, onClick}: {disabled: boolean, children: ReactNode, onClick: () => void}) => {
    return <button 
                style={{backgroundColor: disabled ? "red" : "blue", color: "white", padding: 10}} 
                onClick={onClick}
            >{children}</button>
};

export default Button;

