import React, {useState} from 'react';
import ItemList from "./ItemComponent/ItemList";

export function Home() {
    const [items, setItems] = useState([
    { id: 1, type: "fruit", title: "Апельсин" },
    { id: 2, type: "fruit", title: "Apple" },
    { id: 3, type: "fruit", title: "Розмарин" },
])

      function toggleItem(id) {
    setItems(items.map(item => {
        if (item.id === id) {
            item.title = "Потрачено";
        }
        return item
    }))
      }
      
      return (
        <div className="board"> 
          <ItemList items={items}  onToggle={toggleItem}/>
        </div>
    );
  }
