export enum TokenId {
  END_FILE,
  PLUS,
  MINUS,
  MULT,
  DIV_WOQ,
  DIV_WQ,
  MOD,
  LSQBR,
  RSQBR,
  LPAREN,
  RPAREN,
  QTMARK,
  LT,
  GT,
  LEQ,
  GEQ,
  DNEQ,
  EQ,
  IS,
  AND,
  OR,
  DOT,
  COMMA,
  INT,
  FLOAT,
  NUM,
  STRING,
  BOOL,
  ID_VAR,
  ID_METHOD,
  METHOD,
  RETURN,
  LOOP,
  FROM,
  TO,
  WHILE,
  UNTIL,
  IF,
  ELSE,
  THEN,
  END,
  NEW_ARR,
  NEW_QUEUE,
  NEW_STACK,
  LENGTH,
  GET_NEXT,
  POP,
  DEQUEUE,
  HAS_NEXT,
  PUSH,
  ENQUEUE,
  IS_EMPTY,
  OUTPUT,
  INPUT,
}

export const ReservedKeywords = new Map<string, TokenId>([
  ["div", TokenId.DIV_WQ],
  ["mod", TokenId.MOD],
  ["AND", TokenId.AND],
  ["OR", TokenId.OR],
  ["method", TokenId.METHOD],
  ["return", TokenId.RETURN],
  ["loop", TokenId.LOOP],
  ["from", TokenId.FROM],
  ["to", TokenId.TO],
  ["while", TokenId.WHILE],
  ["until", TokenId.UNTIL],
  ["if", TokenId.IF],
  ["else", TokenId.ELSE],
  ["then", TokenId.THEN],
  ["end", TokenId.END],
  ["output", TokenId.OUTPUT],
  ["input", TokenId.INPUT],
  ["length", TokenId.LENGTH],
  ["getNext", TokenId.GET_NEXT],
  ["hasNext", TokenId.HAS_NEXT],
  ["push", TokenId.PUSH],
  ["pop", TokenId.POP],
  ["enqueue", TokenId.ENQUEUE],
  ["dequeue", TokenId.DEQUEUE],
  ["isEmpty", TokenId.IS_EMPTY],
  ["Array", TokenId.NEW_ARR],
  ["Stack", TokenId.NEW_STACK],
  ["Queue", TokenId.NEW_QUEUE],
]);
