import { useState, useMemo, useCallback, memo } from "react";

// Parent component that causes frequent re-renders
export default function OptimizedPerformanceParent() {
  const [count, setCount] = useState(0);

  // Memoize data creation to prevent recreation on every render
  const data = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        value: Math.random(),
      })),
    [] // Empty deps array since this doesn't need to change
  );

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <MemoizedExpensiveComponent data={data} />
    </div>
  );
}

const ExpensiveComponent = ({ data }: ExpensiveComponentProps) => {
  // Memoize static objects
  const styles = useMemo(
    () => ({
      padding: "20px",
      margin: "10px",
      border: "1px solid #ccc",
    }),
    []
  );

  // Memoize callback functions
  const handleClick = useCallback((item: DataItem) => {
    console.log("Clicked:", item);
  }, []);

  // Memoize expensive calculations
  const processedData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        processed: item.value * 2,
      })),
    [data]
  );

  // Memoize static config object
  const config = useMemo(
    () => ({
      showValue: true,
      format: "default",
    }),
    []
  );

  return (
    <div style={styles}>
      {processedData.map((item) => (
        <div key={item.id} onClick={() => handleClick(item)}>
          <MemoizedChildComponent config={config} data={item} />
        </div>
      ))}
    </div>
  );
};

// Memoized child component to prevent unnecessary re-renders
const MemoizedChildComponent = memo(({ config, data }: ChildComponentProps) => {
  return <div>{config.showValue && <span>{data.processed}</span>}</div>;
});

// Memoize the entire ExpensiveComponent
const MemoizedExpensiveComponent = memo(ExpensiveComponent);

type DataItem = {
  id: number;
  value: number;
  processed?: number;
};

type Config = {
  showValue: boolean;
  format: string;
};

type ExpensiveComponentProps = {
  data: DataItem[];
};

type ChildComponentProps = {
  config: Config;
  data: DataItem;
};
