// Bad
class myClass {
    doSomething() {
        return 1 + 4;
    }
}

// Good
class myClass {
    static doSomething() {
        return 1 + 4;
    }
}