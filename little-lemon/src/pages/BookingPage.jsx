import { BookingForm } from "../components/BookingForm/BookingForm"
import { Footer } from "../components/Footer/Footer"
import { Nav } from "../components/Nav/Nav"

export const BookingPage = () => {
  return (
    <div>
        <Nav/>
        <BookingForm/>
        <Footer/>
    </div>
  )
}