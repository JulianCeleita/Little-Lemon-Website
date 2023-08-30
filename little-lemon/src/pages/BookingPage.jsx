import { BookingForm } from "../components/BookingForm/BookingForm"
import { Footer } from "../components/Footer"
import { Nav } from "../components/Nav"

export const BookingPage = () => {
  return (
    <div>
        <Nav/>
        <BookingForm/>
        <Footer/>
    </div>
  )
}