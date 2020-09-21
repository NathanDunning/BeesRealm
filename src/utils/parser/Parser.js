import nearley from 'nearley';
import grammar from './grammar';

export default class Parser {
  parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

  parse(code) {
    // Parse
    this.parser.feed(code);

    // parser.results is an array of possible parsings.
    console.log(this.parser.results); // [[[[ "foo" ],"\n" ]]]
  }
}
