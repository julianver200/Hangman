
interface PopupProps {
  message: string; // Only passing the message string
}
const Popup = ({message}:PopupProps) => {
  const isWinner = message === "Winner! Nice job."; 
  const isLoser = message === "You Lost! Try again."; 


  return (
    <div className={`pt-3 font-bold text-2xl
      ${isWinner ? "bg-green-50 text-green-700" : ""}
      ${isLoser ? "bg-red-50 text-red-700" : ""}
      ${!isWinner && !isLoser ? "bg-white text-black" : ""}
    `}>
      {message}
    </div>
  )
}
    
export default Popup 