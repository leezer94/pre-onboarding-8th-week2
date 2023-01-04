import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/issueList',
      transformResponse: todos => todos.sort((a, b) => a.id - b.id),
      providesTags: ['Todos'],
    }),
    addTodos: builder.mutation({
      query: todo => ({
        url: '/issueList',
        method: 'POST',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: todo => ({
        url: `/issueList/${todo.id}`,
        method: 'PATCH',
        body: todo,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: id => ({
        url: `/issueList/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation, useUpdateTodoMutation, useDeleteTodoMutation } = apiSlice;
