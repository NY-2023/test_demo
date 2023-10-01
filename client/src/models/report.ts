import type { Answer } from './answer';

export interface Report {
  id: string;
  name: string;
  description: string;
  answers?: Answer[];
}
