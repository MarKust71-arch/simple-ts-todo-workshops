import { Todo } from './Todo';
import { config } from './config';

export class TodosCollection {
  private currentlyEdited = null;

  /**
   * Gets the id of the currently editing Todo
   * @returns id of the currently editing Todo
   */
  getCurrentlyEditedTodoId: any = () => {};

  /**
   * Gets a particular Todo by its id
   * @param id - id of the Todo
   * @returns Todo object with the passed id
   */
  getTodoById: any = () => {};

  /**
   * Adds new Todo
   * @param title - title of the Todo
   */
  addWithTitle: any = (title: string) => {
    const todosCollectionId = config.todosCollectionId;
    var todosArr: Todo[] = JSON.parse(localStorage.getItem(todosCollectionId));

    const todo: Todo = new Todo();
    todo.id = todo.newId();
    todo.title = title;
    todo.isDone = false;

    if (todosArr) {
      todosArr.push(todo);
    } else {
      todosArr = [todo];
    }
    localStorage.setItem(todosCollectionId, JSON.stringify(todosArr));
  };

  /**
   * Updates title of the sepcified Todo
   * @param id - id of the Todo
   * @param title - title of the Todo
   */
  updateTodoTitle: any = () => {};

  /**
   * Removes all Todos where isDone property is equal to true
   */
  clearCompleted: any = () => {};

  /**
   * Toogles isDone property for the specified Todo
   * @param id - id of the Todo
   */
  toggleTodoIsDone: any = () => {};

  /**
   * Turns on the edit mode for the particular Todo
   * @param id - id of the Todo
   */
  setTodoEditMode: any = () => {};

  /**
   * Turns off the edit mode
   */
  unsetTodoEditMode: any = () => {};
}
