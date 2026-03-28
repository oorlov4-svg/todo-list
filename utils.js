const TODOS_KEY = "todos";
export const saveTodosIntoLocalStorage = (todos) => {
        localStorage.setItem("todos", JSON.stringify(todos));
}
export const getTodosFromLocalStorage = () => {
        return JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
}
export  const getDateRepresentation = (todoCreatedDate) => {
    return Intl.DateTimeFormat("eu-Eu", {
        day:"numeric",
        month:"numeric",
        year: "numeric",
    }).format(todoCreatedDate);
}