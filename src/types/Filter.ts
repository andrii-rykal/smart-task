export type Filter = {
  filterBy: 'name' | 'username' | 'email' | 'phone';
  value: string;
};