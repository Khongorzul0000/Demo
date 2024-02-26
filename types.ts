export type User = {
  id: number;
  username: string;
  email: string;
  number: number;
  location: string;
  rating: number;
  likes: number;
  volunteerDone: Volunteer[];
};

export type Volunteer = {
  name: string;
  description: string;
  peopleNeeded: number;
  where: string;
  when: string;
};
