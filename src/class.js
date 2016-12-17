
class Task {
  constructor(title = Task.getDefaultTitle()) {
    this.title = title;
    this._done = false;
    Task.count += 1;
    console.log('zzz');
  }

  get done() {
    return this._done === true ? 'Yep' : 'Nope';
  }

  set done(value) {
    if (value !== undefined && typeof value === 'boolean') {
      this._done = value;
    } else {
      console.log("Error ! Print TRUE of FALSE");
    }
  }

  complete() {
    this.done = true;
    console.log(`Task ${this.title} done !`);
  }

  static getDefaultTitle() {
    return "Task";
  }
}
Task.count = 0;

let task = new Task('Clean up');
console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);


// let task2 = new Task('Buy products');
// let task3 = new Task();
//
// console.log(task.title);
// console.log(task2.title);
// console.log(task3.title);
//
// console.log(Task.count);
// task2.complete();
