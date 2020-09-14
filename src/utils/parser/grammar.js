// Generated automatically by nearley, version 2.19.6
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "input", "symbols": ["function"]},
    {"name": "function", "symbols": ["model", {"literal":"."}, "command"]},
    {"name": "model$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":"."}, {"literal":"w"}, {"literal":"o"}, {"literal":"r"}, {"literal":"k"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "model", "symbols": ["model$string$1"]},
    {"name": "model$string$2", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":"."}, {"literal":"g"}, {"literal":"a"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"r"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "model", "symbols": ["model$string$2"]},
    {"name": "model$string$3", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":"."}, {"literal":"f"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "model", "symbols": ["model$string$3"]},
    {"name": "model$string$4", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"i"}, {"literal":"s"}, {"literal":"."}, {"literal":"q"}, {"literal":"u"}, {"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "model", "symbols": ["model$string$4"]},
    {"name": "command$string$1", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"N"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "command", "symbols": ["command$string$1"]},
    {"name": "command$string$2", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"N"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":"E"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "command", "symbols": ["command$string$2"]},
    {"name": "command$string$3", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"E"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "command", "symbols": ["command$string$3"]},
    {"name": "command$string$4", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"S"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"h"}, {"literal":"E"}, {"literal":"a"}, {"literal":"s"}, {"literal":"t"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "command", "symbols": ["command$string$4"]},
    {"name": "command$string$5", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"S"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"h"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "command", "symbols": ["command$string$5"]},
    {"name": "command$string$6", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"S"}, {"literal":"o"}, {"literal":"u"}, {"literal":"t"}, {"literal":"h"}, {"literal":"W"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "command", "symbols": ["command$string$6"]},
    {"name": "command$string$7", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"W"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "command", "symbols": ["command$string$7"]},
    {"name": "command$string$8", "symbols": [{"literal":"m"}, {"literal":"o"}, {"literal":"v"}, {"literal":"e"}, {"literal":"N"}, {"literal":"o"}, {"literal":"r"}, {"literal":"t"}, {"literal":"h"}, {"literal":"W"}, {"literal":"e"}, {"literal":"s"}, {"literal":"t"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "command", "symbols": ["command$string$8"]},
    {"name": "command$string$9", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"p"}, {"literal":"("}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "command", "symbols": ["command$string$9"]},
    {"name": "digits$ebnf$1", "symbols": ["digit"]},
    {"name": "digits$ebnf$1", "symbols": ["digits$ebnf$1", "digit"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "digits", "symbols": ["digits$ebnf$1"]},
    {"name": "digit", "symbols": [/[0-9]/]},
    {"name": "boolean$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$1"]},
    {"name": "boolean$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "boolean", "symbols": ["boolean$string$2"]}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
