import {checkToken} from "../../utilities/users-service"

export default function OrderHistoryPage() {
  const handleCheckToken = async () => {
    checkToken()
    const expDate = await checkToken
    console.log(expDate)
  }
  
  return (
  <>
    <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check Token</button>
  </>
  )
}


