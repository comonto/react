import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const accordionData = [
  {
    id: 'panel1',
    title: 'First Accordion',
    content: 'Content of the first accordion panel goes here.',
  },
  {
    id: 'panel2',
    title: 'Second Accordion',
    content: 'Content of the second accordion panel goes here.',
  },
  {
    id: 'panel3',
    title: 'Third Accordion',
    content: 'Content of the third accordion panel goes here.',
  },
];

const MultiAccordions = () => {
  const [expandedPanels, setExpandedPanels] = useState([]);

  const handleChange = (panelId) => (event, isExpanded) => {
    setExpandedPanels((prev) =>
      isExpanded ? [...prev, panelId] : prev.filter((id) => id !== panelId)
    );
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: 4 }}>
      {accordionData.map(({ id, title, content }) => (
        <Box
          key={id}
          sx={{
            mb: 2,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: '#f9f9f9',
            p: 1,
          }}
        >
          <Accordion
            expanded={expandedPanels.includes(id)}
            onChange={handleChange(id)}
            elevation={0} // No inner shadow since Box has shadow
            sx={{ backgroundColor: 'transparent' }} // Inherit Box background
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${id}-content`}
              id={`${id}-header`}
            >
              <Typography variant="h6">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{content}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default MultiAccordions;
