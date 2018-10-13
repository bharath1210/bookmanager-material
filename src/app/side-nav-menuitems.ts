export interface SideNavItem {
    path?: string;
    text: string;
    icon: string;
    isExpanded?: boolean;
    submenuItems?: any[];
}

export const sidenavMenuItems: SideNavItem[] = [
    {
        path: '/',
        text: 'Home',
        icon: 'home',
    },
    {
        text: 'Books',
        icon: 'dashboard',
        isExpanded: false,
        submenuItems: [
            {
                path: '/books/view',
                text: 'List',
                icon: 'list',
            },
            {
                path: '/books/create',
                text: 'Create',
                icon: 'list',
            },
        ]
    },
    {
        path: '/account/login',
        text: 'Login',
        icon: 'verified_user',
    },
    {
        path: '/account/signup',
        text: 'Register',
        icon: 'verified_user',
    },
];
