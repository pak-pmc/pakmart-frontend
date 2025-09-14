import {IUser} from "@/src/interfaces/IUser";

export const AUTH_STORAGE_KEY = 'authUser';

export function setAuthUser(user: IUser): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    }
}

export function getAuthUser(): IUser | undefined {
    if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem(AUTH_STORAGE_KEY);
        return storedUser ? JSON.parse(storedUser) : undefined;
    }
    return undefined;
}

export function removeAuthUser(): void {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(AUTH_STORAGE_KEY);
    }
}

export function getAuthToken(): string |undefined {
    const user = getAuthUser();
    return user ? user?.token : undefined ;
}

export function response<T = any>(httpResponse: any): { success: boolean; message: string; data: T; meta: any } {
    const data = httpResponse?.data;
    return {
        success: data?.success as boolean,
        message: data?.message as string,
        data: data?.data as T,
        meta: data?.meta,
    }
}