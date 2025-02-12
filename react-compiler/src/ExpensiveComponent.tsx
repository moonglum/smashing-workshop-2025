// BadPerformance.jsx
import { useState } from "react";

// Parent component that causes frequent re-renders
export default function BadPerformanceParent() {
  const [count, setCount] = useState(0);

  // Large dataset recreated on every render
  const data: DataItem[] = Array.from({ length: 50000 }, (_, i) => ({
    id: i,
    value: Math.random(),
  }));

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <ExpensiveComponent data={data} />
    </div>
  );
}

const ExpensiveComponent = ({ data }: ExpensiveComponentProps) => {
  // New object created on every render
  const styles = {
    padding: "20px",
    margin: "10px",
    border: "1px solid #ccc",
  };

  // New function created on every render
  const handleClick = (item: DataItem) => {
    console.log("Clicked:", item);
  };

  // Expensive calculation performed on every render
  const processedData = data.map((item) => ({
    ...item,
    processed: item.value * 2,
  }));

  return (
    <div style={styles}>
      {processedData.map((item, index) => (
        // New anonymous function on every render
        <div key={index} onClick={() => handleClick(item)}>
          {/* New object passed as prop on every render */}
          <ChildComponent
            config={{
              showValue: true,
              format: "default",
            }}
            data={item}
          />
        </div>
      ))}
    </div>
  );
};

// Child component that receives new object references
const ChildComponent = ({ config, data }: ChildComponentProps) => {
  return <div>{config.showValue && <span>{data.processed}</span>}</div>;
};

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
