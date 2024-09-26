export interface Course {
  teacherId: string;
  id: string;
  title: string;
  description: string;
  imageName: string;
  relatedCategories: string[];
  dateCreated: number;
}
