import type {User} from "@/types/user";

export interface UserState {
    authorized: boolean;
    user?: User;
    error?: Error;
}
