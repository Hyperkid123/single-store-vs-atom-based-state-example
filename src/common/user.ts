export type UserType = {
  name: string;
  email: string;
  internal: {
    isAdmin: boolean;
  };
};

export const user: UserType = {
  name: 'John Doe',
  email: 'john.doe@email.com',
  internal: {
    isAdmin: false,
  },
};
