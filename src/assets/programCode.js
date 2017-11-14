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
 
Begin
    read(n);
    root := Nil;
    for i := 1 to n do begin
        read(x);
        addToTree(root , x);
    end;
    writeTree(root);
End.
`
