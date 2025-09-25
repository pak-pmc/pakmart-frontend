// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'http', hostname: 'localhost', port: '9090', pathname: '/storage/images/**' },
            { protocol: 'http', hostname: 'localhost', port: '9090', pathname: '/images/**' },
            { protocol: 'http', hostname: '10.120.203.206', port: '9090', pathname: '/images/**' },
            { protocol: 'https', hostname: 'products-api.pakpmc.com', port: '', pathname: '/images/**' },

        ],
    },

};

export default nextConfig;
