export interface IDeleteLevelService {
  remove(id: string): Promise<{ deleted: boolean }>;
}
