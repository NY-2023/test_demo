import { Box, CssBaseline } from '@mui/material';

import Header from "./components/header";
import ReportList from './components/reports';

function App() {
  return (
    <div>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Header title="ESG Reporting" />
        <ReportList />
      </Box>
    </div>
  );
}

export default App;
