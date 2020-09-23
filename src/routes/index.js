import user from './user';
export default (app) => {
    app.use('/api/user', user);
}