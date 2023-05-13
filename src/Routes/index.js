// Pages
import HomePage from '~/Pages/Home';
import FollowingPage from '~/Pages/Following';
import Upload from '~/Pages/Upload';
import Profile from '~/Pages/Profile';

// layout
import { HeaderOnly } from '~/Components/Layouts';

// private row
const privateRoutes = [];

// public row
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Upload, layout: null },
];

export { privateRoutes, publicRoutes };
