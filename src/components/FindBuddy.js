import Button from "./Button"

const FindBuddy = ({buddy, message}) => {
  return (
    <div>
      <h1>YOU FOUND {buddy}! </h1>
      <h3>{message}</h3>
      <p>You have found 2 buddies, you have 2 left.</p>
      <p>Press the button to continue.</p>
      <Button name="Continue" link="#" />
    </div>

  )
}

export default FindBuddy