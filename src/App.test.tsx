
import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';
//FireEvent = Excuta um evento

// Teste Unitário
const sum = (x: number, y: number) => {
  return x + y;
};

describe("App Component", () => {
  // Testando a funcionalidade de uma função
  it("should sum correctly", () => {
    expect(sum(5, 5)).toBe(10); // O que se espera que aconteça
  });

  // Renderizando um Componete
  it('should render App with hello message', () => {
    render(<App />);

    screen.getByText("Hello world!");
   });

   it("shoud change message on button click", () => {
    render(<App />);

    //Testa se há esse texto
    screen.getByText("Let's learn more about testing in React");

    const button = screen.getByText(/message/i);
    // testa o clique do botão
    fireEvent.click(button)

    // testa a nova mensagem depois de renderizada.
    screen.getByText(/new message/i);

    // Testar se a mensagem passada está no elemento    
    const oldMessage = screen.queryByText("Let's learn more about testing in React");

    // Para garantir que a message passada não estar no elemento
    expect(oldMessage).toBeNull();
   });



   
   
});

export default {};
