interface User {
  username: string
  password: string
}

interface UsersStorage {
  [key: string]: User
}

const USERS_KEY = "users"

const getUsers = (): UsersStorage => {
  const users = localStorage.getItem(USERS_KEY)
  return users ? JSON.parse(users) : {}
}

const saveUsers = (users: UsersStorage): void => {
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

const generateUserKey = (username: string, password: string): string => {
  return `${username}${password}`
}

export const usersApi = {
  register: (
    username: string,
    password: string
  ): { success: boolean; message: string } => {
    const users = getUsers()
    const userKey = generateUserKey(username, password)

    if (users[userKey]) {
      return { success: false, message: "Пользователь уже существует" }
    }

    users[userKey] = { username, password }
    saveUsers(users)
    return { success: true, message: "" }
  },

  login: (
    username: string,
    password: string
  ): { success: boolean; message: string } => {
    const users = getUsers()
    const userKey = generateUserKey(username, password)

    if (!users[userKey]) {
      return { success: false, message: "Пользователь не найден" }
    }

    return { success: true, message: "" }
  },
}
