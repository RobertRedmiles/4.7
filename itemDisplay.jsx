const ItemDisplay = ({list}) => {
    return (
        <div>
            <h2>List of items</h2>
            <ul>
            {list && 
                list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default ItemDisplay;