

type props = {
    message:string
}

const ErrorMessage:React.FC<props> = ({message}) => {
  return (
    <div>
      <p style={{color:"red"}}>{message}</p>
    </div>
  )
}

export default ErrorMessage
