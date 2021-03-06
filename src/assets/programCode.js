export default `(* Example Pascal code *)

Type TNode = ^Node;
     Node = record
        info : integer;
        left , right : TNode;
     end;
 
Var root : TNode;
    n , i , x : integer;
 
Procedure addToTree(var root : TNode; x : integer);
Begin
    if root = Nil then begin
        new(root);
        root^.left := Nil;
        root^.right := Nil;
        root^.info := x;
    end else if (root^.info > x) then
        addToTree(root^.left, x)
    else
        addToTree(root^.right, x); 
End;

Procedure writeTree(var root : TNode);
Begin
    if root <> Nil then begin
        write(root^.info, ' ');
        writeTree(root^.left);
        writeTree(root^.right);
    end;
End;


Function search(node : TNode; val : integer) : string;
Begin
    if (node = Nil)
    then search := 'not found'
    else if node^.info = val 
    then search := 'present'
    else if node^.info > val
    then search := search(node^.left, val)
    else search := search(node^.right, val);
End;

Begin
    read(n);
    root := Nil;
    for i := 1 to n do begin
        read(x);
        addToTree(root, x);
    end;
    writeTree(root);
    writeln;
    writeln(2, ' ', search(root, 2));
    writeln(10, ' ', search(root, 10));
End.

-- input 5 3 1 2 4 5

`
