export interface IDeleteDeveloperUseCase {
  remove(id: string): Promise<{ deleted: boolean }>;
}
