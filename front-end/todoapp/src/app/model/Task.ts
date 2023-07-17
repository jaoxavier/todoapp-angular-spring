export interface Task{
    id?: number;
    title: string | null;
    description: string | null;
    dueDate: string | null;
    finished?: boolean;
}
