class CodeHandler {
    code = ``;
    runClicked = false;

    get code() {
        return this.code
    }

    set code(x) {
        this.code = x
    }

    get runClicked() {
        return this.runClicked
    }

    set runClicked(status) {
        this.runClicked = status
    }
}

export default CodeHandler