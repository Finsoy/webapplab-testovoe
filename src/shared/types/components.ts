import { FC, ReactNode } from 'react';

export type FCC<T = { children?: ReactNode }> = FC<T & { children?: ReactNode }>;
