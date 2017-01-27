# Secret Guest List

You are in charge of creating a top-secret guest list! You and your superior who created the guest list are the only individuals that have the original copy and list of guests on the list.  Your superior asked you to find a way to keep the guest list as secret as possible, only exposing the guest list to the individuals on the list the day of the event.

You decided to create two functions, `guestListFns` and `generateGuestList`.

#### Guest List Functions

The `guestListFns` function accepts two arguments:

- Guest List Array: This is the original guest list your superior gave you
- Secret Code: The secret code can be any JavaScript value

The `guestListFns` returns an array of functions.  Each function in the array returned accepts a `Secret Code` as an argument.  When one of the functions in the array is invoked with the proper secret code (the same code passed to the `guestListFns`), it will return one of the guest's names in the original Guest List Array.  The values in the functions can't be changed, so the guest names can't be changed or manipulated from a corrupt individual! 



Example:

```javascript

var guestListFns = guestListFns(["Gabriel", "Ben", "Dan", "Griffin", "Cang", "Kate", "Chris"], 512);

var guest = guestListFns[1](512); // guest ==> "Guest-Ben";
```


#### Generate Guest List

It is the day of the event and time to create the actual guest list.  You know each function contains one of the original names of a guest from the original guest list. Weeks, months, years may have gone by since the original guest list, anyone could have tampered with it! Luckily, you ran the `guestListFns` that has a way of accessing the original Guest Names.

Create the function `generateGuestList` that takes the original secret code passed to the `guestListFns` function.  The `generateGuestList` function will invoke each function from the guestListFns array and add the return values (guest names) to a new array.


Example:

```javascript


var guestListFns = guestListFns(["Gabriel", "Ben", "Dan", "Griffin", "Cang", "Kate", "Chris"], 512);


var guestList = generateGuestList(guestListFns, 512);

// guestList = ["Gabriel", "Ben", "Dan", "Griffin", "Cang", "Kate", "Chris"];

```

NOTE: YOU MAY NOT USE THE ES6 KEYWORD 'LET' IN THIS PROBLEM. FOR FULL CREDIT, YOU MUST COMPLETE THIS PROBLEM USING ONLY ES5