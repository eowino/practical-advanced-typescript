interface ITreeNode<T> {
  value: T;
  left: ITreeNode<T>;
  right: ITreeNode<T>;
}

interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T>;
}

interface IListNode<T> {
  value: T;
  next: IListNode<T> | null;
  prev: IListNode<T> | null;
}

// redux time travel debugging with types

interface IAction {
  type: string;
}

let action1 = { type: 'LOGIN' };
let action2 = { type: 'VIEW OPTIONS' };

let actionNode1: IListNode<IAction> = {
  value: action1,
  next: null,
  prev: null
};

let actionNode2: IListNode<IAction> = {
  value: action2,
  next: null,
  prev: actionNode1
};

let currentNode = actionNode2;

while (currentNode.prev) {
  currentNode = currentNode.prev;
}

// self referencing type aliases
