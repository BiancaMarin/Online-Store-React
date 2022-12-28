import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Questions } from './SurveyQuestions';
import { Button, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import styles from './StartSurvey.module.css';
import { StyledCardQuestion } from '../../mui styles';

function StartSurvey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [option, setOption] = useState('');
  const navigate = useNavigate();

  function handleNextQuestion() {
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div className={styles['survey']}>
      <StyledCardQuestion>
        <Typography variant="h6">
          {Questions[currentQuestion].prompt}
        </Typography>

        <div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="one"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="one"
                control={<Radio />}
                label={Questions[currentQuestion].option1}
                onClick={() => setOption('1')}
              />
              <FormControlLabel
                value="two"
                control={<Radio />}
                label={Questions[currentQuestion].option2}
                onClick={() => setOption('2')}
              />
              <FormControlLabel
                value="three"
                control={<Radio />}
                label={Questions[currentQuestion].option3}
                onClick={() => setOption('3')}
              />
            </RadioGroup>
          </FormControl>
        </div>
        {currentQuestion === Questions.length - 1 ? (
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate('/')}
          >
            Finish survey! Thank you for trusting us!
          </Button>
        ) : (
          <Button
            color="primary"
            variant="contained"
            onClick={handleNextQuestion}
          >
            Next question
          </Button>
        )}
      </StyledCardQuestion>
    </div>
  );
}

export default StartSurvey;
