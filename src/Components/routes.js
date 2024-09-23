// import EventList from "../pages/EventList/EventList"
import EventList from "./EventList/EventList"
// import FilterEvents from "../pages/FilterEvents/FilterEvents"
import FilterEvents from "./FilterEvents/FilterEvents"
// import EventDetail from "../pages/EventDetails/EventDetails"
import EventDetail from "./EventDetail/EventDetail"
import Login from "./Login/Login"
import Register from "./Register/Register"
import EnterDataPage from "../EnterDataPage/EnterDataPage"
import Service from "./Service/Service"
import Contact from "./Contact/Contact"
import About from "./About/About"

export const routes = [
  {path:'/Events',element:<EventList/>},
  {path:'/filter-events',element:<FilterEvents/>},
  {path:'/add-events',element:<EnterDataPage/>},
  {path:'/events/:id',element:<EventDetail/>},
  {path:'/login',element:<Login/>},
  {path:'/register',element:<Register/>},
  {path:'/service',element:<Service/>},
  {path:'/about',element:<About/>},
  {path:'/contact',element:<Contact/>}
]