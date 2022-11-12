import React from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'

export default function NotFound() {

  const location = useLocation();
  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);

  return (
    <h1>404 Not Found</h1>
  )
}