export default class MyClass extends godot.Control {
  constructor() {
    super();
  }

  _ready() {
    console.LOG_OBJECT_TO_JSON = true;
    this.connect("ready", ()=> this.whenRenamed(["connect", "whenRenamed","passed as function"]));
    this.connect("ready", this, "whenRenamed", ["connect", "whenRenamed","passed as string"]);
    this.connect("ready", this.whenRenamed.bind(this, ["connect", "whenRenamed","bind"]));

    this.emit_signal("my_custom_signal");
  }

  whenRenamed(args) {
    console.log(...args);
  }

  triggerCustomSignal() {
    console.log("triggerCustomSignal");
  }

  childEnteredTree(node){
    console.log("child_entered_tree", node);
  }
}

godot.register_signal(MyClass, "my_custom_signal");
