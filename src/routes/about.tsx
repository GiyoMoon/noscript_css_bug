import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
      <noscript>
        <style>
          {`
          h1 {
            color: red;
          }
        `}
        </style>
      </noscript>
      <p>The h1 title shouldn't be red. Refresh to fix.</p>
    </main>
  );
}
