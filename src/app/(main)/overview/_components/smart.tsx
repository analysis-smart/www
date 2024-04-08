"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { Button } from "~/components/ui/button";
import React from "react";
import { Minus, Plus } from "lucide-react";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

const list = [
  {
    address: "5QQYuYkv8LqtHXwLPjmoJw4P3TKNRZ6TrrxkHK7JqkNu",
    name: "",
    earn: "195.65",
  },
  {
    address: "GAXUCJsDtLwog6Vpf4NNYVKYZ2oD1etEeTRwFeGVkMaY",
    name: "",
    earn: "120.72",
  },
  {
    address: "J99VMdpiwaghfy64Jxz3qN38eomnSqF8trcctqerQcmQ",
    name: "",
    earn: "1,302.23",
  },
  {
    address: "BpVfA6hK7XuuQ7eHoZ7a5cN6mQ672fgsw3XxR1hPQaV2",
    name: "",
    earn: "399.03",
  },
  {
    address: "9FR1mGRNTmZp8bdeQc3E1WRGkK3atvQjSfJqB3ot1UxD",
    name: "",
    earn: "1,839.45",
  },
  {
    address: "5QQYuYkv8LqtHXwLPjmoJw4P3TKNRZ6TrrxkHK7JqkNu",
    name: "",
    earn: "519.91",
  },
  {
    address: "A2khRbhRJNrAEHj95htivC4cR4VbJwfssDH5FPPbP4m9",
    name: "",
    earn: "817.52",
  },
  {
    address: "4cHMtYJ9qdSyHUh77ZME8a9saxGgpff8TFSSBL9B4ePw",
    name: "",
    earn: "1,307.72",
  },
  {
    address: "FGjzBV8ZFbVuWSDjkyrtqYuDKqvKRfvHaoRMom2zUG7S",
    name: "",
    earn: "653.42",
  },
];

export function Smart() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/avatars/base.png" />
                  <AvatarFallback>{item.address.slice(-2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">
                    {item.address}
                  </p>
                </div>
              </div>
              <Drawer>
                <DrawerTrigger>
                  <Button className="rounded-full">Fllow</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Follow time</DrawerTitle>
                      <DrawerDescription>
                        Set your daily activity goal.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                      <div className="flex items-center justify-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          onClick={() => onClick(-10)}
                          disabled={goal <= 200}
                        >
                          <Minus className="h-4 w-4" />
                          <span className="sr-only">Decrease</span>
                        </Button>
                        <div className="flex-1 text-center text-green-300">
                          <div className="text-7xl font-bold tracking-tighter">
                            {goal}
                          </div>
                          <div className="text-[0.70rem] uppercase text-foreground">
                            min
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          onClick={() => onClick(10)}
                          disabled={goal >= 400}
                        >
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Increase</span>
                        </Button>
                      </div>
                      <div className="mt-3 h-[120px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={data}>
                            <Bar
                              dataKey="goal"
                              style={
                                {
                                  fill: "hsl(var(--foreground))",
                                  opacity: 0.9,
                                } as React.CSSProperties
                              }
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <DrawerFooter>
                      <Button>Submit</Button>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
