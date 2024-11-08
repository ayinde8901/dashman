import { Box } from "@mui/material"
import Header from "../../components/Header"
import Barchart from "../../components/Barchart"

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="simple Bar chart"/>
      <Box height="75vh">
        <Barchart/>
      </Box>
    </Box>
  )
}

export default Bar
