interface IAdmin {
  id: string;
  role: string;
}

interface IUser {
  email: string;
}

function redirect(user: IAdmin | IUser) {
  if ('role' in user) {
    // in this if block - 'user' is assumed to be an admin
    routeToAdmin(user.role);
  } else {
    // in this else block - 'user' is assumed to be a user
    routeToUser(user.email);
  }
}

function routeToAdmin(role: string) {}
function routeToUser(email: string) {}

// Using the JavaScript “in” operator, we can test for the presence of different properties.

// TypeScript will automatically infer the exact type of our object
// by looking at all the possible types in the union and then
// keeping only the ones that have that specific property defined.
