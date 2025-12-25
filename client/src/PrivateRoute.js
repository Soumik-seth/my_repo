<Route path="/books" element={
  <PrivateRoute>
    <BooksPage />
  </PrivateRoute>
} />
