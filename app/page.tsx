'use client';

import client from '@/lib/apolloClient';
import { gql } from '@apollo/client';

export default async function Home() {
  const { data } = await client.query({
    query: gql`
      query GetItems {
        items {
          id
          name
          description
        }
      }
    `,
  });

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {data.items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
