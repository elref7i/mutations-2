import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function CardWithForm({ dataInfo }: { dataInfo: category }) {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>{dataInfo.name}</CardTitle>
        <CardDescription>{dataInfo.slug}</CardDescription>
        <CardDescription>{dataInfo.productsCount}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
