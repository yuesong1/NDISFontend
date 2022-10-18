import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';

const labels = {
  0.5: 'Need to be change now',
  1: 'Make some changes please',
  1.5: 'Lost some imformation',
  2: 'Lost some key points',
  2.5: 'Not bad',
  3: 'Make sense',
  3.5: 'Good job',
  4: 'Nice work',
  4.5: 'That is excellent',
  5: 'Very excellent',
};

export default function TextRating(props) {
  const mark = props.mark;
  const value = mark/2;

  return (
    <Box
      sx={{
        width: 200,
        display: 'inline-block',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}

Rating.propTypes = {
  questionType: PropTypes.string,
  answers: PropTypes.array,
  updateAnswer: PropTypes.func
};