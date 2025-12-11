import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingLists from "./PackingLists";
import Stats from "./Stats";

export default function App() {
  const [items, setItem] = useState([]);
  function handleAddItems(item) {
    setItem((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirm) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingLists
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
