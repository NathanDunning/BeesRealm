import nearley from 'nearley';
import grammar from './grammar';

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

export function parse(code) {
  const wrappedCode = '"' + code + '"';

  // Parse
  parser.feed(code);

  // parser.results is an array of possible parsings.
  console.log(parser.results); // [[[[ "foo" ],"\n" ]]]
}

// DEAL WITH SEMICOLON
// RECURSIVE ++
