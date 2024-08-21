// Testando se quando clicar em um botão, ele pega as tarefas e mostra elas na tela.

import { render } from '@testing-library/react';
import { setupWorker, rest } from "msw";
import Tasks from "./Tasks";

describe('Tasks Component', () => {
    const worker = setupWorker(
        rest.get("https://jsonplaceholder.typicode.com/todos?_limit-10", async (req, res, ctx))
    )

    it('should fetch and show tasks on button click', () => {
        render(<Tasks />)
    })
})