import './App.css'

const MasonryGrid = () => {
  // Sample data with different aspect ratios
  const images = [
    { id: 1, aspectRatio: '4/3' },
    { id: 2, aspectRatio: '1/1' },
    { id: 3, aspectRatio: '3/4' },
    { id: 4, aspectRatio: '16/9' },
    { id: 5, aspectRatio: '1/1' },
    { id: 6, aspectRatio: '4/5' },
    { id: 7, aspectRatio: '3/2' },
    { id: 8, aspectRatio: '2/3' },
    { id: 9, aspectRatio: '1/1' },
    { id: 10, aspectRatio: '4/3' },
    { id: 11, aspectRatio: '3/4' },
    { id: 12, aspectRatio: '16/9' },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-2 w-full">
        {images.map(({ id, aspectRatio }) => (
          <div key={id} className="relative w-full overflow-hidden">
            <div style={{ aspectRatio }} className="w-full h-full">
              <img
                src={`https://picsum.photos/seed/${id}/300/${Math.floor(300 * (eval(aspectRatio)))}`}
                alt={`Grid item ${id}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <MasonryGrid />
    </>
  )
}

export default App