import user from './user';
export default (app) => {
    app.use('/user', user);
}