import { navigate } from "gatsby"
import React, { useContext, useState } from "react"
import { AccountContext } from "../../context/account"

const PrivateRoute = ({ component: Component, admin, location, ...rest }) => {
  const [loading, setLoading] = useState(false)
  const account = useContext(AccountContext)
  console.log({ acc: account })
  if (account.isLoggedIn) {
    if (admin && account.is_admin) {
      return <Component {...rest} />
    } else if (!admin) {
      return <Component {...rest} />
    } else {
      navigate("/unauthorized")
    }
  } else if (!loading) {
    account
      .session()
      .then((data) => {
        setLoading(false)
      })
      .catch((err) => {
        navigate("/login")
      })
  }
  return "Loading..."
}

export default PrivateRoute
