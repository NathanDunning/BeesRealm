input -> value

value
    -> function
    | conditional
    | value

function
    -> model "." command
    | model "." command ";"
    | model "." command "\n"
    | model "." command ";" "\n"

model
    -> "this.worker"
    | "this.gatherer"
    | "this.fighter"
    | "this.queen"

command
    -> "moveNorth()"
    | "moveNorthEast()"
    | "moveEast()"
    | "moveSouthEast()"
    | "moveSouth()"
    | "moveSouthWest()"
    | "moveWest()"
    | "moveNorthWest()"
    | "stop()"

conditional 
    ->  statement
    | loop

statement 
    -> ifstmt _ elsestmt?

ifstmt -> "if" _ "(" _ condition _ ")" _ "{" _ expression _ "}" 
elsestmt -> "else" _ "{" expression "}" ifstmt?

condition -> boolean

loop 
    -> forloop
    | whileloop

forloop 
    -> "for" _ "(" _ "let" _ variable "=" number _ ";" _ variable  _ inequality _ number ";" _ variable modifier ")" "{" _ value "}"

number -> digit | digits
digits -> digit:+
digit -> [0-9]
variable -> word | words
words -> word:+
word -> [a-z]
inequality -> "<" | ">" | "==" | "===" | "<=" | ">=" | "!=" | "!==" 
modifier -> "++" | "--" | "+=" | "-=" 

boolean 
    -> "true"
    | "false"
