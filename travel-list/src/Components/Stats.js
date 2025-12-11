export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list ✈️</em>
      </p>
    );
  const listItems = items.length;
  const listPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((listPacked / listItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everthing! Ready to go ✈️"
          : `💼 You have ${listItems} items on your list, and you already packed
        ${listPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
