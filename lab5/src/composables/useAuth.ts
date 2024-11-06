import {reactive, ref} from "vue";
import type { UserState } from "@/types/userState";

const userState: UserState  = reactive<UserState>({
    authorized: false,
    user: undefined,
    error: undefined,
});
export default function (): {
    userState: UserState;
} {
    return {
        userState,
    }
}
