input 
    -> function

function
    -> model "." command

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

digits -> digit:+

digit -> [0-9]

boolean 
    -> "true"
    | "false"
