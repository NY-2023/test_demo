import { useEffect, useState } from "react";
import { Report } from "../models/report";
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

const ReportList: React.FC = () => {

  const [data, setData] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {

    const getReports = async () => {
      const response = await fetch(`http://${window.location.hostname}:3001/reports`);
      const reportData = await response.json();
      console.log(reportData);
      setData(reportData);
      setLoading(false);
    }

    getReports().catch( (error) => {
      console.log(`Error: fetching data from backend`);
      setError(true);
    })
    
   }, []);

  return (
    <Grid container spacing={2} sx={{ marginTop: 12, paddingLeft: 5 }}>
        {data.map((report: Report) => (
          <Card variant="outlined" sx={{ maxWidth: 280, margin:1}}>
            <CardContent>
              <Typography variant="h5" component="div">
                {report.name}
              </Typography>
              <Typography sx={{ minHeight: 100, mb: 1.5 }} color="text.secondary">
                {report.description}
              </Typography>
              <Typography sx={{ fontSize: 14, alignSelf: "end" }} color="text.secondary">
                {`id: ${report.id}`}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View Report</Button>
            </CardActions>
          </Card>
        ))}
    </Grid>
  );
};

export default ReportList;
