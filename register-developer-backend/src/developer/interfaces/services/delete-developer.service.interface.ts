export interface IDeleteDeveloperService {
  remove(id: string): Promise<{ deleted: boolean }>;
}
