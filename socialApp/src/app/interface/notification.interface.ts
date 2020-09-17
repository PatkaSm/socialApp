export interface INotification {
  id: number;
  user: string;
  content: string;
  icon: string;
  timestamp: Date;
  is_liked: boolean;
}
