export interface IDeleteLevelUseCase {
  remove(id: string): Promise<{ deleted: boolean }>;
}
