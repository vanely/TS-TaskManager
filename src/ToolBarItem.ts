export default class ToolBarItem {
  public userTodo: HTMLElement | null;
  public submit: HTMLElement | null;

  constructor() {
    this.userTodo = document.querySelector('#todoEntry');
    this.submit = document.querySelector('#submit');

    this.submit.addEventListener('click', this.add);
  }

  add(e: Event) {
    console.log(`Hi there I work ${this.userTodo}`);
  }

  remove() {
    console.log();
  }

  edit() {

  }
}