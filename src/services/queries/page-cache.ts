import { client } from '$services/redis/client';
import { pageChacheKey } from '$services/keys';

const chachePage = ['/about', '/privacy', '/auth/signin', '/auth/signup'];

export const getCachedPage = (route: string) => {
    if (chachePage.includes(route)) {
        client.get(pageChacheKey(route));
    }
    return null
};


export const setCachedPage = (route: string, page: string) => {
    if (chachePage.includes(route)) {
        client.set(pageChacheKey(route), page, {
            EX: 2,
        });
    }
};
