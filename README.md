This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Practicum Report

|  | Framework Based Programming 2024 |
|--|--|
| NIM |  2141720067|
| Nama |  Saefulloh Fatah Putra Kyranna |
| Kelas | TI - 3I |

## Answer of Question No. 1

Output: 

![Screenshot](assets/01.png)

The display of the website reveals the level of the heading and sections in the main page. This is done by the use of context which provides necessary components from a child component to the parent component. 

## Answer of Question No. 2

The initial run of the website results in the following error. 

![Screenshot](assets/02.png)

This is because the `createContext` function only works in the Client component instead of the Server component which is normally created in Next.js. Therefore, we need to modify the entire file (`mycontext.tsx`, `heading.tsx`, `section.tsx`) with the `'use client'` code. 

Output: 

![Screenshot](assets/03.png)

