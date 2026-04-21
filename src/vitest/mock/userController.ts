import { fetchUser } from './api'

export async function getUserName(id: number): Promise<string> {
    const user = await fetchUser(id)
    return user.name
}