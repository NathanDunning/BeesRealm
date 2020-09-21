input -> value

value
    -> function
    | conditional

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

statement 
    -> ifstmt _ elsestmt?
    | ifstmt _ "else" ifstmt

ifstmt -> "if" _ "(" _ condition _ ")" _ "{" _ expression _ "}" 
elsestmt -> "else" _ "{" expression "}"

digits -> digit:+

digit -> [0-9]

boolean 
    -> "true"
    | "false"
