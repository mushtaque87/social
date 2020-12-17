interface IUser {
  email?: string;
}

interface ISession {
  attributes: IUser;
  username: string;
  id: string;
}

function getUser(session: ISession) {
  return session.attributes;
}

export { getUser, ISession };
