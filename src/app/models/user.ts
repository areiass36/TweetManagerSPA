import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler";

export interface User {
    _id: string,
    username: string,
    name: string,
    profileImageUrl: string,
    deletedTweetsCount: number
}