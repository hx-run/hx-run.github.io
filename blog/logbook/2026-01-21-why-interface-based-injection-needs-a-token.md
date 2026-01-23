---
title: Why interface based injection needs a token but class-based injection doesn't
description: Typscript interface-based injection needs a token because typescript interfaces do not exist at runtime.
authors: [hxrun]
tags: [nestjs, abstraction, logbook]
---
Typscript interface-based injection needs a token because typescript interfaces do not exist at runtime.
<!--truncate-->
Therefore, when using interfaces, you must:
- Create an injection token(string, symbol, or constant)
- Register provider using that token
- Inject explicitly with `@Inject(TOKEN)`

```typescript
//di.token.ts
const MAPPER=Symbol('ClassMapper')

//*.module.ts
  providers: [{
    provide: MAPPER,
    useClass: ClassMapperHelper
}],
exports: [
  MAPPER
]

//*.service.ts
...
  constructor(
    @Inject(MAPPER) private readonly classMapper: IClassMapperHelper,
  )
  {
  }
```

On the other hand class-based injection (or abstract class–based) doesn't need a token because classes exist at runtime. Nestjs can use the class constructor as the token automatically
No need for: 
- Custom provider tokens
- `@Inject()` decorator 

```typescript
//*.module.ts
  providers: [
      ClassMapperHelper
  ],
  exports: [
    ClassMapperHelper
  ]

//*.service.ts
...
  constructor(
    private readonly classMapper: ClassMapperHelper,
  )
  {
  }
```
