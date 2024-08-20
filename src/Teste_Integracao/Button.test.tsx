// Testando com Testing Library
import { fireEvent, render, screen } from '@testing-library/react';
import Button from "./Button"

describe("Button componenet", () => {
    it("should render with red background if disabled", () => {
        render(<Button disabled onClick={() => {}}>Click me</Button>);

        // Pegar o elemento Button com a query getByRole, colocada dentro deum const 
        const button = screen.getByRole("button", {name: "Click me"});

        expect(button).toHaveStyle({backgroundColor: "red"})
    });

    // Verificar se uma função está sendo chamada.
    it('should call onClick prop on click', () => {
        const onClick = jest.fn()

        // Para renderizar o componente
        render(<Button disabled onClick={onClick} >Click me</Button>)

        //Para pegar em uma const 
        const button = screen.getByText(/click me/i);

        //Para clicar no botão
        fireEvent.click(button);

        // Para verificar se a função foi chamada

        expect(onClick).toHaveBeenCalled();
    })

})

// jest.fn = permite simular e controlar o componente de uma função
// A 'query' quando não acha o que é passado para ela, ela não falha o teste, diferente do 'get'.