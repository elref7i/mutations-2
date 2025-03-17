'use server';
export async function addCategory(formData: FormData) {
  const response = await fetch(
    'https://flower.elevateegy.com/api/v1/categories',
    {
      method: 'POST',
      body: formData,
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjdkODFhOGM4MzZlZThiZTcwNjIyYWNkIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDIyMTU4MjB9.RNsxCN8Wr2iPmlFX3nimJmGVizqvwfIztqiLzjPjn6g',
      },
    }
  );

  const payload = await response.json();
  console.log(payload);
}
