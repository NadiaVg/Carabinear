export interface AuthResponse {
    user: {
        id: number;
        name: string;
        email: string;
        password: string;
        CP: number;
        admin: boolean;
    },
    access_token: string
}
