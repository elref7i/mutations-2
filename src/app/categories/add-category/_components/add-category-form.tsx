'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { addCategory } from '../_action/category-action';
export default function AddCategoryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const Schema = z.object({
    name: z
      .string({ required_error: 'Category name is required' })
      .min(1, 'category name must be Greater than one '),
    image: z.any(),
  });
  type Inputs = z.infer<typeof Schema>;
  const form = useForm({
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(Schema),
  });

  const onSubmit: SubmitHandler<Inputs> = async () => {
    const formData = new FormData(formRef.current || undefined);

    await addCategory(formData);
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[350px] mx-auto py-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input {...field} type="file" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Category</Button>
      </form>
    </Form>
  );
}
