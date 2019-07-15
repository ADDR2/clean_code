// Bad
class Connection {
    constructor() {
        this.data = {};
    }

    process(data) {
        this.data = {
            ...data,
            processed: true
        };
    }

    save() {
        console.log(this.data);
    }
}

const connection = new Connection();
connection.process({ type: 'weird' });
connection.save();

// Good
class ConnectionChained {
    constructor() {
        this.data = {};
    }

    process(data) {
        this.data = {
            ...data,
            processed: true
        };

        return this;
    }

    save() {
        console.log(this.data);

        return this;
    }
}

const connectionChained = new ConnectionChained();
connectionChained.process({ type: 'weird' }).save();
