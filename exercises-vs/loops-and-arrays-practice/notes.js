// Loop Types
    // for (let i = 0; i < 10; i++) {
    //     console.log("hello", i)
    // }

    // let i = 0;
    // while (i < 10) {
    //    console.log(i)
    //     i += 1 
    // }

    // the importance of return
    const array = [
        "Diana",
        "Jeff",
        "Eric"
    ]

    for (var i = 0; i < array.length; i++) {
        console.log(i)
        if (array[i] === "Jeff" ) {
            console.log(i, array[i])
            return
        }
    }







// Loop structure
    // initialize variable
    // condition
    // code to run before checking condition again
        // usually -> increment/decrement 

// Use cases
    // console.log(10)
    // array
    // array of objects


    const objArr = [
        {name: "Alan"},
        {name: "Alan2"},
        {name: "Alan3"}
    ]

    for (let i = 0; i < objArr.length; i++) {
        console.log(objArr[i].name)
    }