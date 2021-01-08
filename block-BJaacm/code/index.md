```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true as they both hold the same reference point
- `user === newUser;`// true as they both hold the same reference point
- `user.name === newUser.name;`// true as they both point to the same block within a block of memory
- `user.name == newUser.name;`// true as they both point to the same block within a block of memory
- `user.sibling == newUser.sibling;` // true as they both point to the same block within a block of memory
- `user.sibling === newUser.sibling;` // true as they both point to the same block within a block of memory
- `user.sibling == allBrothers;`//false as although they might be the same values they point to different memory locations.
- `user.sibling === allBrothers;`//false as although they might be the same values they point to different memory locations.
- `brothersCopy === allBrothers;`//false as user.sibling is still of data type object, that means it still holds location rather than the actual value.
- `brothersCopy == allBrothers;`//false as user.sibling is still of data type object, that means it still holds location rather than the actual value.
- `brothersCopy == user.sibling;`//yes as they both point to the same location, i.e they both hold the same value.
- `brothersCopy === user.sibling;`////yes as they both point to the same location, i.e they both hold the same value.
- `brothersCopy[0] === user.sibling[0];`//trut as in this case we onlu check the value and datatype
- `brothersCopy[1] === user.sibling[1];`//trut as in this case we onlu check the value and datatype
- `user.sibling[1] === newUser.sibling[1];`//true as in this case we onlu check the value and datatype 
