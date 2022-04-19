import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Form from "../components/Form/Form"
import PromotionList from "../components/Promotion/List/List"
import { promotionService } from "../service/promotions"

export default function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PromotionList />} />
          <Route path="/create" element={<Form />} />
          <Route path="/edit/:id" element={<Form />} />
        </Routes>
      </Router>
    </div>
  )
}
