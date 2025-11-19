// src/lib/api/userApi.ts
import apiClient from './backendApi'

// This is a placeholder. Replace with actual API call.
export const fetchUserProfile = async (email: string) => {
  console.log(`Fetching profile for ${email}`)
  // const response = await apiClient.get(`/user/${email}`);
  // return response.data;

  // Placeholder data
  return Promise.resolve({
    email,
    name: 'Test User',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  })
}
