import Dogs from "./Dogs";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <h1>Dogs, Dogs, Dogs!</h1>
      <p>
        Welcome to our amazing dog breed explorer! Below you'll find a list of
        all dog breeds from around the world. Each breed is unique and special
        in its own way. Let's discover them together!
      </p>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="black" />
              <circle cx="50" cy="50" r="35" fill="#333" />
              <circle cx="50" cy="50" r="30" fill="#222" />
              <text
                x="50"
                y="55"
                textAnchor="middle"
                fill="white"
                fontSize="12"
              >
                Loading...
              </text>
            </svg>
          </div>
        }
      >
        <Dogs />
      </Suspense>
    </div>
  );
}
