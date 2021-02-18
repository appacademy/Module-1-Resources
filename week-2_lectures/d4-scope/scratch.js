function varStringMachine() {
    var string = "I'm function scoped!";
    var string = "I'm a new string"
    string = "I'm also a new string"
    if (true) {
        var string = "I've been reassigned from within a block";
        console.log(string);
    }
    console.log(string);
}
varStringMachine();;
