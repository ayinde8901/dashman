import { Box } from "@mui/material"
import Header from "../../components/Header"
import { PieChart } from "@mui/icons-material"

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="simple Par chart"/>
      <Box height="75vh">
        <PieChart/>
      </Box>
    </Box>
  )
}

export default Bar
