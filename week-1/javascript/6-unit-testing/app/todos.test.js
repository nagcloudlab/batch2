


const todos = require('./todos')

test("should render all todos", () => {
    // const fn = todo => console.log(todo)
    const mockFn = jest.fn(todo => console.log(todo));
    todos.renderTodos(mockFn)
    expect(mockFn.mock.calls.length).toBe(3)
})