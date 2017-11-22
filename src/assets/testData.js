export default [{
  question: 'Як працює процедура Continue?',
  correct: 2,
  answers: [
    'виконання програми переходить на наступний рядок',
    'нічого не відбувається',
    'здійснює перехід до початку чергової ітерації циклу',
    'зупиняє виконання програми',
    'виконує безумовний вихід із циклу'
  ]
}, {
  question: 'Як працює процедура Break?',
  correct: 4,
  answers: [
    'виконання програми переходить на наступний рядок',
    'нічого не відбувається',
    'здійснює перехід до початку чергової ітерації циклу',
    'зупиняє виконання програми',
    'виконує безумовний вихід із циклу'
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
}, {
  question: 'Чим відрізняється функція від процедури?',
  correct: 0,
  answers: [
    'З іменем функції пов’язана певна комірка пам’яті, в яку засилається один з результатів роботи цієї програми, а з іменем процедури ні.',
    'Нічим не відрізняється',
    'Різниця лише в синтаксисі',
    'Процедури виконуються швидше',
    'Функції можуть бути рекурсивними, а процедури не можуть'
  ]
}, {
  question: 'Назвіть всі типи текстових даних в мові Pascal',
  correct: 1,
  answers: [
    'один рядковий тип даних string',
    'два типи: символьний char та рядковий string',
    'один символьний тип даних char',
    'два типи: символьний CharArray та рядковий string',
    'типи char, word, string'
  ]
}, {
  question: 'Як оголосити перерахунковий тип?',
  correct: 2,
  answers: [
    'type Color = { White, Green, Blue };',
    'type Color = [ White, Green, Blue ];',
    'type Color = ( White, Green, Blue );',
    'type Color = White, Green, Blue;',
    'type Color = < White, Green, Blue >;'
  ]
}, {
  question: 'Як оголосити діапазонний тип?',
  correct: 3,
  answers: [
    'Letters = from ’A’ till ’Z’;',
    'Letters = ’A’ - ’Z’;',
    'Letters = ’A’...’Z’;',
    'Letters = ’A’..’Z’;',
    'Letters = ’A’ goto ’Z’;'
  ]
}, {
  question: 'Знайдіть слово, що не є зарервованим?',
  correct: 4,
  answers: [
    'with',
    'type',
    'file',
    'record',
    'field'
  ]
}, {
  question: 'Як утворити багаторядковий коментар?',
  correct: 0,
  answers: [
    '(* коментар *)',
    '<% коментар %>',
    '[- коментар -]',
    '<!-- коментар -->',
    '// коментар'
  ]
}, {
  question: 'Виберіть правильне ім\'я змінної',
  correct: 1,
  answers: [
    'АН-140',
    'X_new',
    '1X',
    '_AAA',
    'Old+Value'
  ]
}, {
  question: 'Розділ операторів',
  correct: 2,
  answers: [
    'починається зі слова exec',
    'починається зі слова start',
    'починається зі слова begin',
    'починається зі слова go',
    'починається зі символу {'
  ]
}, {
  question: 'Розділ операторів',
  correct: 2,
  answers: [
    'закінчується словом done',
    'закінчується словом stop',
    'закінчується словом end',
    'закінчується словом exit',
    'закінчується символом }'
  ]
}, {
  question: 'Як оголосити динамічний масив?',
  correct: 3,
  answers: [
    'var mas: array real;',
    'var mas: [] of real;',
    'var mas: real[];',
    'var mas: array of real;',
    'var mas: real array;'
  ]
}, {
  question: 'Як встановити довжину 10 динамічному масиву mas?',
  correct: 4,
  answers: [
    'Memset(mas, 10);',
    'Allocate(mas, 10);',
    'SetLen(mas, 10);',
    'Length(mas, 10);',
    'SetLength(mas, 10);'
  ]
}, {
  question: 'Команда CLRSCR служить для',
  correct: 0,
  answers: [
    'очищення екрану',
    'очікування натиску клавіші',
    'виходу з програми',
    'генерації випадкового числа',
    'немає правильної відповіді'
  ]
}, {
  question: 'Розділ VAR служить для',
  correct: 1,
  answers: [
    'опису констант',
    'опису використовуваних змінних',
    'опису виразів',
    'опису типів даних',
    'немає правильної відповіді'
  ]
}, {
  question: 'Змінні - це',
  correct: 2,
  answers: [
    'літерали',
    'зарезервовані слова',
    'величини, які можуть змінювати своє значення в процесі виконання програми',
    'величини, які не можуть змінювати своє значення в процесі виконання програми',
    'немає правильної відповіді'
  ]
}, {
  question: 'Оператором циклу не є',
  correct: 3,
  answers: [
    'While...',
    'For...',
    'Case...',
    'Repeat...',
    'немає правильної відповіді'
  ]
}, {
  question: 'Виберіть оператор вибору',
  correct: 4,
  answers: [
    'While',
    'For',
    'Repeat',
    'Case',
    'немає правильної відповіді'
  ]
}, {
  question: 'Який з циклів не містить логічної умови?',
  correct: 0,
  answers: [
    'For...',
    'While...',
    'Repeat...',
    'всі містять',
    'немає правильної відповіді'
  ]
}, {
  question: 'Як оголосити власну структуру даних для представлення трьохвимірної координати?',
  correct: 1,
  answers: [
    'type Point3D:record x,y,z:integer; end;',
    'type Point3D=record x,y,z:integer; end;',
    'type Point3D:struct x,y,z:integer; end;',
    'type Point3D=struct x,y,z:integer; end;',
    'type Point3D=record x,y,z:integer;'
  ]
}, {
  question: 'Як виглядає оператор присвоєння у pascal?',
  correct: 2,
  answers: [
    '==',
    '=',
    ':=',
    '<-',
    '=:'
  ]
}, {
  question: `Для чого призначений оператор WITH <Змінна типу RECORD> DO ...?`,
  correct: 3,
  answers: [
    'такий оператор неприпустимий',
    'для оголошення змінної типу RECORD',
    'для організації циклу по всіх полях типу RECORD',
    'для полегшення доступу до полів типу RECORD',
    'немає правильної відповіді'
  ]
}, {
  question: `Вивід даних виконується за допомогою оператора`,
  correct: 4,
  answers: [
    'PROGRAM',
    'ECHO',
    'OUTPUT',
    'PRINT, PRINTLN',
    'WRITE, WRITELN'
  ]
}]
