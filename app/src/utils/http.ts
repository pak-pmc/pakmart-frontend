'use client'

import axios from 'axios';

export function http(baseURL?: string, extraHeaders: Record<string, string> = {}
) {
    return axios.create({
        baseURL: baseURL ?? process.env.NEXT_PUBLIC_APP_API_BASE_URL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            ...extraHeaders,
        }
    });
}

