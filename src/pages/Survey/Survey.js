import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Survey.module.css';

function Survey() {
  const navigate = useNavigate();
  return (
    <div className={styles['survey']}>
      <Card
        sx={{
          width: 900,
          backgroundColor: '#F2F2F2',
          padding: 3,
        }}
      >
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          Do you agree to answer some questions in order to help you to choose
          the perfect outfit?
        </Typography>

        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5 }}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => navigate('/')}
            >
              No
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => navigate('/start')}
            >
              Yes. Let's go!
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Survey;
