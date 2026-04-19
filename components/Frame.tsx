export default function Frame() {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold mb-2">Frame</h3>

      <textarea
        placeholder="Scene description..."
        className="w-full border p-2 mb-2"
      />

      <button className="text-red-500">Delete</button>
    </div>
  );
}
