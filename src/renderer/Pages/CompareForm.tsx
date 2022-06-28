import { useState } from "react";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DenseTable from "../Components/DenseTable";

// Form to intake 2 file paths with a button to submit
export const CompareForm = () => {
  const [filePath1, setFilePath1] = useState('');
  const [filePath2, setFilePath2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');
  
  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setResult('');
    
    const result = "await compareFiles(filePath1, filePath2)";
    setResult(result);
    
    setIsLoading(false);
  }
  
  return (
    <Container maxWidth="sm">
      <Stack spacing={2}>
        <TextField
          value={filePath1} 
          onChange={e => setFilePath1(e.target.value)}
          id="outlined-basic"
          label="File Path 1"
          variant="outlined" 
        />
        <TextField
          value={filePath2} 
          onChange={e => setFilePath2(e.target.value)}
          id="outlined-basic"
          label="File Path 2"
          variant="outlined" 
        />
        {/* MaterialUI button */}
        <Button variant="contained" onClick={handleSubmit} >Compare</Button>

        {isLoading && <Typography>Loading...</Typography>}
        {error && <Typography>Error: {error}</Typography>}
        {result && <DenseTable />}


      </Stack>
    </Container>
  );
}