import { useState } from "react";

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const formSubmit = (event) => {
        event.preventDefault();
        setItems([...items, { name: name, quantity: quantity }]);
        setName("");
        setQuantity("");
    }
    return (
        <div>
            <form onSubmit={formSubmit}>
                <input type="text"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Item Name" />
                <input type="text"
                    value={quantity}
                    onChange={handleQuantityChange}
                    placeholder="Quantity"
                />
                <button type="submit">
                    Add Item
                </button>
            </form>
            <div>
                <ul>
                    {
                        items.map((item) =>
                            <div key={Math.random}>
                                <h1>Shopping List</h1>
                                <li>
                                    <h1>{item.name}</h1>
                                    <h1>{item.quantity}</h1>
                                </li>
                            </div>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
export default ShoppingList;