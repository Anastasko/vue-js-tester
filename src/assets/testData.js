export default [{
  question: 'Як оголосити змінну?',
  correct: 0,
  answers: [
    'var'
  ]
}, {
  question: 'Як позначається вказівник, який нікуди не вказує?',
  correct: 1,
  answers: [
    'Nope',
    'Nil',
    'Null',
    'Undefined',
    'Unknown'
  ]
}, {
  question: 'Як динамічно виділити пам\'ять по вказівнику T?',
  correct: 2,
  answers: [
    'create(T)',
    'allocate(T)',
    'new(T)',
    'mem(T)',
    'place(T)'
  ]
}, {
  question: 'Як динамічно звільними пам\'ять по вказівнику T?',
  correct: 2,
  answers: [
    'free(T)',
    'delete(T)',
    'dispose(T)',
    'clean(T)',
    'clear(T)'
  ]
}, {
  question: 'Як оголосити вказівник car1 на тип TCar?',
  correct: 4,
  answers: [
    'Var car1:TCar',
    'Var car1:@TCar',
    'Var car1->TCar',
    'Var car1^:TCar',
    'Var car1:^TCar'
  ]
}, {
  question: 'Як отримати доступ до даних, що знаходяться в ділянці пам\'яті, на яку вказує вказівник T?',
  correct: 0,
  answers: [
    'записати знак ^ після вказівника: T^',
    'записати знак ^ перед вказівником: ^T',
    'записати знак @ перед вказівником: @T',
    'записати символи -> після вказівника: T->',
    'викокистовувати T в якості даних'
  ]
}, {
  question: 'Як в мові Pascal оголосити нетипований вказівник?',
  correct: 3,
  answers: [
    'Var Р1 : PTR;',
    'Var Р1 : Address;',
    'Var Р1 : Link;',
    'Var Р1 : Pointer;',
    'Var Р1 : Memory;'
  ]
}, {
  question: 'Як в мові Pascal маючи змінну A дізнатися її адресу в пам\'яті?',
  correct: 2,
  answers: [
    'P2:=Address(A);',
    'P2:=WhereIs(A);',
    'P2:=Addr(A);',
    'P2:=Find(A);',
    'P2:=Lookup(A);'
  ]
}]
