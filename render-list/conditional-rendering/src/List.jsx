
function List() {
    const fruits = [
        {id: 1, name: "apple", calories: 95}, 
        {id: 2, name: "orange", calories: 45}, 
        {id: 3, name: "banana", calories: 105}, 
        {id: 4, name: "coconout", calories: 134}, 
        {id: 5, name: "pineapple", calories: 12}
    ];
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // lexical ordered
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) // lexicel reverse ordered
    fruits.sort((a, b) => a.calories - b.calories)
    
    const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruit.map(
        fruit => 
        <li key={fruit.id}>
            {fruit.name}: &nbsp; <b>{fruit.calories}</b>
        </li>
        );
    return (<ol>{listItems}</ol>)
}

export default List;