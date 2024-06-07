/**Interface for movie */
export interface IMovie {
  id: string;
  title: string;
  duration: string;
  budget: string;
  release_date: string;
  poster: string;
  summary: string;
  cinematographers: string[];
  producers: string[];
  box_office: string;
}
