export default class ToolBarItem {
  private userTodo: Element | null;
  private submit: Element | null;

  constructor() {
    this.userTodo = document.querySelector('#todoEntry');
    this.submit = document.querySelector('#submit');

    this.submit.addEventListener('click', this.add);
  }

  add() {
    console.log('Hi there I work');
  }

  remove() {

  }

  edit() {

  }
}