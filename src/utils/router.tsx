import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'src/pages/login';
import ProtectedRoute from './protectedRote';
import ProductsPage from 'src/pages/products';

export default function AllRoutes() {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="products"
        element={
          <ProtectedRoute roles={['Admin']}>
            <ProductsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
