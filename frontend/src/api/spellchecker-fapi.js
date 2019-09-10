import axios from 'axios'
import { baseApiUrl, showError } from '@/global'

export const testSpellcheckerApi = async () => {
  try {
    const response = await axios.get(`${baseApiUrl}/testSpellcheckerApi`)
    return response.data.fakeList
  } catch (err) {
    const errTitle = 'Some error'
    const errMsgUser = 'Some msg to user'
    showError(err, errTitle, errMsgUser)
    return null
  }
}
