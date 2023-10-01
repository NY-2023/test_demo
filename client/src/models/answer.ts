import type { Metric } from './metric';

interface AnswerString extends Metric {
  value: string;
}

interface AnswerBoolean extends Metric {
  value: boolean;
}

interface AnswerNumber extends Metric {
  value: number;
}

export type Answer = AnswerString | AnswerBoolean | AnswerNumber;
