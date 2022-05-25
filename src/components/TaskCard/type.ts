export type Props = {
  isCompleted: boolean;
  onComplete(): void;
  onDelete(): void;
  title: string;
};
