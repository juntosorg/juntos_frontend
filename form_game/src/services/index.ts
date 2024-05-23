import axios from "axios";

// const API = import.meta.env.VITE_API_URL
const API = 'https://5efa99a1-9b03-462b-8a83-5e04136e01fb-00-j7n4fy74wrpw.spock.replit.dev'

export const isValidUserId = async (userId: string): Promise<boolean> => {
    try {
      const response = await axios.get(`${API}/get/${userId}`)
      return response.status === 200
    } catch (error) {
      console.error('Error validating user ID:', error)
      return false
    }
  }