function BackgroundGrid() {
  const rows = Array.from({ length: 14 });
  const cols = Array.from({ length: 24 });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      <div className="grid h-full w-full max-w-7xl grid-rows-[repeat(14,minmax(48px,auto))] px-6 opacity-30">
        {rows.map((_, rowIndex) => (
          <div key={`row-${rowIndex}`} className="flex flex-1">
            {cols.map((__, colIndex) => (
              <div
                key={`cell-${rowIndex}-${colIndex}`}
                className="flex-1 border border-primary-900/30"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BackgroundGrid;
