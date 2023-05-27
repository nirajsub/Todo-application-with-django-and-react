function ItemDisplay(props) {
  const showItem = (item) => {
    return (
      <div className="max-w-sm mx-auto">
        <div className="border border-blue-500 rounded-md shadow-md p-4 bg-white hover:bg-blue-100 transition-colors duration-300">
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Id:</span> {item.id}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Name:</span> {item.name}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Price:</span> {item.price}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Type:</span> {item.type}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Brand:</span> {item.brand}
          </p>
        </div>
      </div>
    );
  };
  return <div>{props.items.map(showItem)}</div>;
}
export default ItemDisplay;
