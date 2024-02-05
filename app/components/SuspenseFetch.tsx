'use client'

import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

const queryFn = async () => {
  return (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
};

const SuspenseFetch = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['test'],
    queryFn: () => queryFn(),
  });
  return <div>
    {data.map(item => <div>{item.title}</div>)
    }
  </div>;
};

export default SuspenseFetch;
