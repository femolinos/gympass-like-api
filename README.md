# App

GymPass style app.

## FRs (Functional Requirements)

- [x] Must be possible to sign up;
- [x] Must be possible to authenticate;
- [x] Must be possible to obtain a user's logged profile information;
- [x] Must be possible to obtain the check-ins' count of the logged user;
- [x] Must be possible for the user to obtain its check-in history;
- [x] Must be possible for the user to search for nearby gyms (max 10km);
- [x] Must be possible for the user to search for gyms by name;
- [x] Must be possible for the user to check-in at a gym;
- [x] Must be possible to validate a user's check-in;
- [x] Must be possible to register a gym;

## BRs (Business Rules)

- [x] The user can't register with a duplicate e-mail;
- [x] The user can't check-in twice on the same day;
- [x] The user can't check-in if he/she is not near the gym (100m);
- [x] The check-in can only be validated within 20 minutes upon its creation;
- [x] The check-in can only be validated by administrators;
- [x] The gym can only be registered by administrators;

## NFRs (Non-Functional Requirements)

- [x] The user's password must be encrypted;
- [x] The application data must be persisted in a PostgreSQL database;
- [x] All data lists must be paginated with 20 items per page;
- [x] The user has to be identified by a JSON Web Token (JWT);
