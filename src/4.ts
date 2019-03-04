// actions
interface IAction {
  type: string;
}

class Add implements IAction {
  readonly type = 'Add';
  // readonly type: string = 'Add'; // original
  constructor(public payload: string) {}
}

class RemoveAll implements IAction {
  readonly type = 'Remove All';
  // readonly type: string = 'Remove All'; // original
}

// finite set of all possible actions
type TodoActions = Add | RemoveAll;

// reducer
interface ITodoState {
  todos: string[];
}

function todoReducer(
  action: TodoActions,
  state: ITodoState = { todos: [] }
): ITodoState {
  switch (action.type) {
    case 'Add': {
      return {
        todos: [...state.todos, action.payload]
      };
    }
    case 'Remove All': {
      return {
        todos: []
      };
    }
    default: {
      const x: never = action;
      // this is just a compile time check to ensure all cases are handled
    }
  }
  return state;
}

// Using string literal types together with switch types, we can build powerful type guarded logic flows.
// This feature of TypeScript is called discriminated unions
